---
title: workflows-cwl-07-toilRunner
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Example: Toil-Runner translates your CWL to HPC

::bottom::

Docs / installation: https://toil.readthedocs.io/en/latest/gettingStarted/install.html

::left::

```bash
source ~/venv/bin/activate
module load Python/3.12.3

export TOIL_TORQUE_ARGS="-A <MyProjectName>"
export TOIL_TORQUE_REQS="walltime=01:59:00"

toil-cwl-runner \
  --batchSystem torque \
  --jobStore job-store \
  --retryCount 0 \
   workflow.cwl run.yml
```

::right::

```yml [run.yml]
message: Hello world!
```

```yml [workflow.cwl]
cwlVersion: v1.2
class: CommandLineTool
baseCommand: echo
stdout: output.txt
inputs:
  message:
    type: string
    inputBinding:
      position: 1
outputs:
  output:
    type: stdout
```
