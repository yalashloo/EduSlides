import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')
const DIST = path.join(ROOT, 'dist')

const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''

fs.mkdirSync(DIST, { recursive: true })

const decks = fs.readdirSync(DECKS_DIR)

for (const deck of decks) {
  const deckDir = path.join(DECKS_DIR, deck)
  const slides = path.join(deckDir, 'slides.md')

  if (!fs.existsSync(slides)) {
    console.log(`Skipping ${deck} (no slides.md)`)
    continue
  }

  const base = `/${repoName}/${deck}/`   // ← THIS WAS THE BUG

  console.log(`Building ${deck} with base ${base}`)

  spawnSync(
    'npx',
    [
      'slidev',
      'build',
      '--base',
      base,
      '--out',
      path.join(DIST, deck),
    ],
    {
      cwd: deckDir,
      stdio: 'inherit',
      shell: true,
    }
  )
}
