---
title: workflows-cwl-02-multiStep
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Build a multi-step workflow

::left::

`sort-csv.cwl` 

```yaml{*}{maxHeight:'140px'}
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

`heatmap.cwl`

```yaml{*}{maxHeight:'140px'}
cwlVersion: v1.2
class: CommandLineTool
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: heatmap.py
        entry:
          $include: heatmap.py
baseCommand: [python, heatmap.py]
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

::right::

```yaml [workflow.cwl]
cwlVersion: v1.2
class: Workflow

inputs:
  input_file: File
  out_heatmap: string

steps:
  step1:
    run: sort-csv.cwl
    in:
      input_file: input_file
      output_filename: output_filename
    out: [output_file]
  step2:
    run: heatmap.cwl
    in:
      in_sorted: step1/output_file
      output_filename: out_heatmap
    out: [output_file]

...
```

<AdmonitionType type="note" title>
this is not a good example...
</AdmonitionType>
