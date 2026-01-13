---
title: Workflows 5S methodology - sort
author: Dominik Brilhaus
license: CC-BY 4.0
default: layout
---

## **Set-in-order**: Separate data analysis logic from the actual data
    
- Avoid hard-coded paths or filenames
- Parameterize inputs, outputs, and configuration as arguments
- This improves:
  - Reuse across datasets and platforms
  - Smoother integration into larger workflows or pipelines

---
layout: two-columns
---

## Refactor the script

::left::

Identify `inputs` and `outputs` 

```python 
import sys
import pandas as pd

data = pd.read_csv("data.csv")
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv("sorted.csv", index=False)
```

<v-click>

Move input and output variables to its own section

```python 
import sys
import pandas as pd

input_file = "data.csv"
output_file = "sorted.csv"

data = pd.read_csv(input_file)
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv(output_file, index=False)
```

</v-click>

::right::

<v-click>

**Replace hard-coded paths** with CLI arguments

```python [sort-csv.py]
import sys
import pandas as pd

input_file = sys.argv[1]
output_file = sys.argv[2]

data = pd.read_csv(input_file)
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv(output_file, index=False)
```

run via CLI

```bash
python sort-csv.py data.csv sorted.csv
```

</v-click>
