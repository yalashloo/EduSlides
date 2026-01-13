---
title: workflows-5S-method-04-standardize
author: Dominik Brilhaus
license: CC-BY 4.0
default: layout
---

## **Standardize** – Uncouple processes from the execution environment

- Ensure that your analysis can be run anywhere on "defined types of data"
- Use containerization (e.g., Docker, Singularity) to bundle:
  - Dependencies
  - Correct versions
  - Required system tools
- Use existing community-maintained containers where possible, e.g.
  - [BioContainers](https://biocontainers.pro/)
  - [Docker Hub](https://hub.docker.com/)
- This makes your analysis portable and reproducible across different systems