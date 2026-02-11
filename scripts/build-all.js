// scripts/build-all.js
import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')
const DIST = path.join(ROOT, 'dist')

// If we are running on GitHub Pages the repo name is injected as
// GITHUB_REPOSITORY=owner/RepoName – we only need the second part.
const REPO_NAME = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''   // empty → we are serving from the root (e.g. localhost)

fs.mkdirSync(DIST, { recursive: true })

for (const deck of fs.readdirSync(DECKS_DIR)) {
  const deckDir = path.join(DECKS_DIR, deck)
  const slides = path.join(deckDir, 'slides.md')

  if (!fs.existsSync(slides)) {
    console.log(`Skipping ${deck} (no slides.md)`)
    continue
  }

  // -------------------------------------------------
  // 1️⃣ Compute the **public base** under which this deck
  //    will be reachable after the build.
  // -------------------------------------------------
  //   - GitHub Pages:   /<repo>/<deck>/
  //   - Local simple server: /<deck>/
  // -------------------------------------------------
  const publicBase = REPO_NAME
    ? `/${REPO_NAME}/${deck}/`
    : `/${deck}/`

  console.log(`🔨 Building ${deck} → ${path.join(DIST, deck)} (base="${publicBase}")`)

  // -------------------------------------------------
  // 2️⃣ Run slidev with `--base` so that the generated
  //    HTML contains the correct <base href="…"> tag.
  // -------------------------------------------------
  const result = spawnSync(
    'npx',
    [
      'slidev',
      'build',
      '--out',
      path.join(DIST, deck),
      '--base',
      publicBase,
    ],
    {
      cwd: deckDir,
      stdio: 'inherit',   // forward stdout/stderr so we see the log
      shell: true,        // needed on Windows
    }
  )

  if (result.status !== 0) {
    console.error(`❌ Build failed for ${deck}, aborting.`)
    process.exit(result.status)
  }
}