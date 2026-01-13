---
title: workflows-cwl-12-fileTypes
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Specify file types for inputs and outputs

::left::

```yaml [workflow.cwl]
...
inputs:
  input_file:
    type: File
    format: edam:format_3752  # CSV format
...
outputs:
  output_file:     
    type: File
    format: edam:format_3603  # PNG format
...
$namespaces:
  edam: https://edamontology.org/
...
```

::right::

- https://edamontology.org/format_3752
- https://edamontology.org/data_2572
