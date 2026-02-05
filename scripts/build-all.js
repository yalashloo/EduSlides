import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')

const repo = process.env.GITHUB_REPOSITORY
  ? '/' + process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''


const isDeck = name =>
  fs.existsSync(path.join(DECKS_DIR, name, 'slides.md'))

const decks = fs
  .readdirSync(DECKS_DIR)
  .filter(d => fs.statSync(path.join(DECKS_DIR, d)).isDirectory())
  .filter(isDeck)

for (const deck of decks) {
  console.log(`Building ${deck}`)
  spawnSync(
    'npx',
    ['slidev', 'build', '--base', `${repo}/${deck}/`],
    {
      cwd: path.join(DECKS_DIR, deck),
      stdio: 'inherit',
      shell: true
    }
  )
}
