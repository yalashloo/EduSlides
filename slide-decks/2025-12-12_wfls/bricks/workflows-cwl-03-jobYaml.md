---
title: workflows-cwl-03-jobYaml
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Bring back the data to the workflow

::left::

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

::right::

Provide the required parameters

```yaml [my-job.yml]
input_file:
  class: File
  path: data.csv
out_heatmap: heatmap.png
```

Execute with e.g.
```bash
cwltool workflow.cwl my-job.yml
```
