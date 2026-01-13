---
title: workflows-cwl-05-toolDependencies-conda
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Example: CWL + Conda (beta)

::left::

```yml{*}{maxHeight:'400px'}
cwlVersion: v1.2
class: CommandLineTool
requirements:
  - class: InitialWorkDirRequirement
    listing:
      - entryname: sort-csv.py
        entry:
          $include: sort-csv.py
hints:
  SoftwareRequirement
    packages:
      - package: python
        version: [3.10]
        specs: [ https://identifiers.org/rrid/RRID:SCR_008394 ]
      - package: pandas
        version: [1.5.3]
        specs: [ https://identifiers.org/biotools/pandas ]
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


```bash
cwltool --beta-conda-dependencies workflow.cwl
```

::right::

<AdmonitionType type="tip">

With conda and cwltool installed, this can be run directly. No need for tool installation.

</AdmonitionType>

<AdmonitionType type="warning">

Running it like this will locally install the conda dependencies (~2.5GB) parallel to the `workflow.cwl`

Check out
  - `--beta-dependency-resolvers-configuration`
  - `--beta-dependencies-directory`

</AdmonitionType>