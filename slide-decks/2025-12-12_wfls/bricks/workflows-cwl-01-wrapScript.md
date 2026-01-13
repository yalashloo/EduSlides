---
title: workflows-cwl-01-wrapScript
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## CWL-wrap your script

::left::

```python [sort-csv.py]
import sys
import pandas as pd

input_file = sys.argv[1]
output_file = sys.argv[2]

data = pd.read_csv(input_file)
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv(output_file, index=False)
```

::right::

Wrap a script as a CWL `CommandLineTool`:  
`sort-csv.cwl` 

```yaml{*}{maxHeight:'300px'}
cwlVersion: v1.2
class: CommandLineTool
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: sort-csv.py
        entry:
          $include: sort-csv.py
baseCommand: [python, sort-csv.py]
inputs:
  input_file:
    type: File
    inputBinding:
      position: 1
  output_filename:
    type: string
    inputBinding:
      position: 2
outputs:
  output_file:
    type: File
    outputBinding:
      glob: $(inputs.output_filename)
```

<!-- <FancyArrow from="(250, 380)" to="(650, 350)" arc="-0.25" color="#186EC0"/> -->

This basically runs

```bash
python sort-csv.py data.csv sorted.csv
```