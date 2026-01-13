---
title: workflows-cwl-10-docker-Example
author: Dominik Brilhaus
license: CC-BY 4.0
layout: default
---

## Example: CWL + Docker + FastQC


```yaml [workflow.cwl] {5-7}
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

hints:
  DockerRequirement:
    dockerPull: quay.io/biocontainers/fastqc:0.11.9--hdfd78af_1

baseCommand: ["fastqc", "--help"]

inputs: []
 
outputs: []
```

With Docker and cwltool installed, this can be run directly. No need for tool installation.

```bash
cwltool workflow.cwl
```