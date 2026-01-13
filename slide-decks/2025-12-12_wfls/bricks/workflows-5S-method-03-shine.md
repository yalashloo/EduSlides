---
title: Workflows 5S methodology - sort
author: Dominik Brilhaus
license: CC-BY 4.0
default: layout
---

## ✨ **Shine** ✨ – Record information about dependencies

- Record the script language (e.g. Python, R, Bash)
- List all external packages, libraries, and software tools used
- Specify versions
- List runtime environments and hardware requirements
- Include useful metadata:
  - Official citations of tools
  - URLs (e.g. docs, GitHub, project websites)
  - Unique identifiers from registries such as 
    - [bio.tools](https://bio.tools/)
    - [RRIDs via SciCrunch](https://scicrunch.org/resources/about/resource)
    - [identifiers.org](https://identifiers.org/)
  - Authors and contributors

---
layout: default
---

## Record tool dependencies

- Python packages (`pandas, version 1.5.3`, `numpy, version 1.23.0`)
- R libraries (`ggplot2`)
- Command-line tools (`samtools`, `awk`)
- ...

### Conventions for different languages

- Python:
  - pip `requirements.txt`
  - conda `environment.yml`
- R: renv, `renv.lock`
- JavaScript: `package.json`, `package-lock.json`
- .NET: `*.csproj`, `*.fsproj`
- ...
