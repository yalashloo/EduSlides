---
title: workflows-cwl-06-resourceRequirements
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Specify resource requirements

::left::

PBS `qsub` job script

```bash [qsub.sh]{2}
#!/bin/bash
#PBS -l select=1:ncpus=3:mem=1000mb

set -e

module load blastx

blastx ...

...

```

::right::

<v-click>

`ResourceRequirement` allows to specify the required compute resources



```yaml [workflow.cwl]{5-7}
cwlVersion: v1.2
class: CommandLineTool
hints:
  ResourceRequirement:
    coresMin: 3
    ramMin: 1000

baseCommand: [blastx]

inputs: []

outputs: []
```

</v-click>