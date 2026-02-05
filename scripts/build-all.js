import { spawnSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')
const DIST = path.join(ROOT, 'dist')

const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''

const basePath = repoName ? `/${repoName}` : ''

fs.mkdirSync(DIST, { recursive: true })

for (const deck of fs.readdirSync(DECKS_DIR)) {
  const deckDir = path.join(DECKS_DIR, deck)
  if (!fs.existsSync(path.join(deckDir, 'slides.md'))) continue

  spawnSync(
    'npx',
    [
      'slidev',
      'build',
      '--base',
      `${basePath}/${deck}/`,
      '--out',
      path.join(DIST, deck)
    ],
    {
      cwd: deckDir,
      stdio: 'inherit',
      shell: true
    }
  )
}
