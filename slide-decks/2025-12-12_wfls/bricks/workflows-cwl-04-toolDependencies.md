---
title: workflows-cwl-04-toolDependencies
author: Dominik Brilhaus
license: CC-BY 4.0
layout: two-columns
---

## Record tool dependencies

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

```yaml [requirements.txt]
pandas==1.5.3
```

::right::

```yaml [workflow.cwl]
...
hints:
  SoftwareRequirement
    packages:
      - package: python
        version: [3.10]
        specs: [ https://identifiers.org/rrid/RRID:SCR_008394 ]
      - package: pandas
        version: [1.5.3]
        specs: [ https://identifiers.org/biotools/pandas ]
...
```

- `package:` name of the software or package
- `version:` version of the software or package
- `specs:` a reference URL for the software or package (e.g. from [bio.tools](https://bio.tools) or [SciCrunch](https://identifiers.org/rrid/))
