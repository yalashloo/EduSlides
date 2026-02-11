# Slide Decks

*EduBricks*-based slide decks for FAIR asset reuse. :stars:

Please visit https://edubrickshub.github.io/EduSlides/ to find the example slide decks.

## Idea

- This repository handles slides and styles (**no assets**, **no images**) and renders the slide decks via [Slidev](https://sli.dev/)
- Images can be handled and sourced from anywhere else (i.e. URLs) to **keep this repo lightweight**
- EduBricks & EduPaths are sourced as git submodule from https://github.com/EduBricksHub/EduBricks

## Contribution

Contributions are very welcome. Please check the [contribution guide](./CONTRIBUTING.md) for setups, technical details and design ideas.

## Overall Design

```mermaid
graph LR

  subgraph IMG[EduImages]
    IMG1
    IMG2
    IMG3
  end

  subgraph EBEP[EduBricks-EduPaths]
    
subgraph EduBricks
      EB1[EduBrick 1]
      EB2[EduBrick 2]
      EB3[EduBrick 3]
    end
    
    subgraph EduPaths
      EP1[EduPath A]
      EP2[EduPath B]
    end

  end

  subgraph EduSlides
    SD1[Slide Deck 1]
    SD2[Slide Deck 2]
  end

  IMG1 --html-src--> EB1
  IMG2 --html-src--> EB2
  IMG3 --html-src--> EB3
  
  EBEP --Git-Submodule--> EduSlides

  EB1 --src--> EP1
  EB2 --src--> EP1
  EB3 --src--> EP2
  EP1 --src--> SD1
  EP2 --src--> SD1
  EB3 --src--> SD2  
  EP1 --src--> SD2

classDef brickStyle fill:#B4CE82,rx:.4em,ry:.4em;
classDef pathStyle fill:#4FB3D9,rx:.4em,ry:.4em;
classDef slideStyle fill:#FFC000,rx:.4em,ry:.4em;

class EduBricks brickStyle;
class EduPaths pathStyle;
class EduSlides slideStyle;

```

## License

This work is licensed under a [Creative Commons Attribution 4.0 International License][cc-by].

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
