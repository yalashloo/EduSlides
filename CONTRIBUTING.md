# Contribution Guide

Please read the [README](README.md) for some general considerations and the idea.

## Design in this repository

This repo basically brings together slides and slide-decks (which themselves source images from elsewhere) and renders a single-page application (SPA).

```yaml
.
├── app                    # <- the vue based SPA (i.e. the final website)
├── CONTRIBUTING.md
├── dist
├── EduBricks-EduPaths     # <- git submodule of https://github.com/EduBricksHub/EduBricks-EduPaths
├── LICENSE
├── node_modules
├── package-lock.json
├── package.json
├── README.md
├── scripts                # <- scripts to take care of build logic and pulling metadata from slides.md YAML frontmatter
├── slide-decks
└── themes                 # <- themes including layouts for styling a slide deck
```

### Adding a new slide deck

To add a new slide deck, add a new subfolder to [./slide-decks](slide-decks) including a `slides.md`, e.g.:

```yaml
slide-decks/<NameOfSlideDeck>
├── custom  # = Slides only used in this slide deck's context
│   ├── 00-title.md
│   ├── 99-acknowledgements.md
│   └── goal.md
└── slides.md # = the slide deck to be rendered by slidev
```

Note: Only slide decks **following exactly** this path and file name (`slides.md`) convention are automatically picked up.


#### Adding slides

There's two main ways to add slides

1. Adding it directly inside `slides.md`: 

  ```markdown
  ---
  
  # Header slide 1

  Content slide 1

  ---

  # Header slide 2
  
  Content slide 2  
  
  ---

  ```


2. Compile slides from other slides, use this src logic:

  ```md
  ---
  src: path/to/slide
  ---
  ```
  
  E.g.
  
  ```md
  ---
  src: ../../EduBricks-EduPaths/EduBricks/my-brick.md
  ---
  ```

  You can also selectively add slides with the `#` logic at the end

  ```md
  ---
  src: ../../EduBricks-EduPaths/EduBricks/my-brick.md#1,2
  ---
  ```


## Breaking Links

Due to the design of multi-layered source references, there's a risk of breaking links. To make sure, a (local) copy of a slide deck works as-is, export it to pdf... 


## Deploy slide deck via GitHub Pages (done automatically)

Once added to the `main` branch, slide decks are deployed publicly on https://edubrickshub.github.io/EduSlides/.

## Working with Slidev locally

[Slidev](https://sli.dev/) is a vue.js based framework to build slides from markdown files.

- This can also be used to compile slide decks from individual slides ("EduBricks") or smaller pre-defined slide decks ("EduPaths") 
- There's a [vscode extension](https://sli.dev/features/vscode-extension) available
- during watch or build it checks, that all referenced / reused images or imported bricks actually exist

## Setup

### Install node.js

This depends on [node.js](https://nodejs.org/en/download).

### Clone this repository

```bash
git clone https://github.com/EduBricksHub/EduSlides.git
```

### Git Submodule

To include EduBricks as git submodule, use the following command to add it to your local clone:

```bash
git submodule update --init --recursive
```

### Install Slidev and other dependencies

```bash
npm install
```

### Watch a local preview of the slide deck gallery

To watch the gallery with all slide decks, run `npm run start` and open `http://localhost:5173/`.


### Watch a single Slidev slide deck

You can see an example slide deck built with Slidev here using the following command. 
This should open a browser with the presentation, including some presentation controls in the bottom-left corner.

> Note: this will only work, if above `git submodule` are correctly added and pulled locally.

```bash
npm run dev -- slide-decks/2025-11-19_intro-rdm/slides.md
```

### Export a Slidev slide deck to pdf

You can directly export a slide deck to pdf using Slidev's browser controls or use the export command, e.g.

```bash
npm run export -- slide-decks/2025-11-19_intro-rdm/slides.md --output slide-decks/2025-11-19_intro-rdm/slides.pdf
```
