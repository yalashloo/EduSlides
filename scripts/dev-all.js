import fs from 'fs'
import path from 'path'
import { spawn } from 'child_process'

const ROOT = process.cwd()
const DECKS_DIR = path.join(ROOT, 'slide-decks')
const BASE_PORT = 3030

const isDeck = name =>
  fs.existsSync(path.join(DECKS_DIR, name, 'slides.md'))

const decks = fs
  .readdirSync(DECKS_DIR)
  .filter(d => fs.statSync(path.join(DECKS_DIR, d)).isDirectory())
  .filter(isDeck)

let port = BASE_PORT

function run(cmd, args, cwd) {
  const p = spawn(cmd, args, {
    cwd,
    stdio: 'inherit',
    shell: true
  })
  return p
}

// Start SPA
run('npm', ['run', 'dev'], path.join(ROOT, 'app'))

// Start decks
for (const deck of decks) {
  run('npx', ['slidev', '--port', port++, '--remote'], path.join(DECKS_DIR, deck))
}
