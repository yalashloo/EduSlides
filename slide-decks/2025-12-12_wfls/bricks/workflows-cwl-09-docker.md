---
title: workflows-cwl-09-docker
author: Dominik Brilhaus
license: CC-BY 4.0
layout: default
---

## Add a container

Use the `DockerRequirement` to load a published Docker image



```yaml [workflow.cwl]
...
requirements:
  - class: DockerRequirement
    dockerPull: python:3.10-slim
...
```