---
title: Execute Workflows Locally – cwltool
author: Dominik Brilhaus
license: CC-BY 4.0
date: 2025-12-12
layout: center
---



# Setup for CWL

- Install [Docker](https://docs.docker.com/engine/install/)
- Install [conda](https://docs.conda.io/projects/conda/en/latest/user-guide/install/)
- Install the CWL Runner [cwltool](https://cwltool.readthedocs.io/en/latest/)

---

# cwltool

- The **Reference CWL runner**
- Validates and executes workflows
- Supports Docker, Singularity, and Conda

```bash
pip install cwltool
cwltool --help
```

https://cwltool.readthedocs.io/en/latest/

---

# Running CWL with conda dependencies (beta)

You can let CWL take care of your dependencies

```bash
cwltool --beta-conda-dependencies workflow.cwl
```

```yml [workflow.cwl]
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool


hints:
  SoftwareRequirement:
    packages:
      fastqc:
        version: [ "0.12.1" ]

baseCommand:
    - "fastqc"
    - "--version"

inputs: []

outputs: []
```

<AdmonitionType type="warning">

Running it like this will locally install the conda dependencies (~2.5GB) parallel to the `workflow.cwl`

</AdmonitionType>