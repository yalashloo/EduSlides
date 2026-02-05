import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')
const DIST = path.join(ROOT, 'dist')

const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : null

fs.mkdirSync(DIST, { recursive: true })

for (const deck of fs.readdirSync(DECKS_DIR)) {
  const deckDir = path.join(DECKS_DIR, deck)
  const slides = path.join(deckDir, 'slides.md')

  if (!fs.existsSync(slides)) {
    console.log(`Skipping ${deck} (no slides.md)`)
    continue
  }

  const base = repoName
    ? `/${repoName}/${deck}/`
    : `/${deck}/`

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
