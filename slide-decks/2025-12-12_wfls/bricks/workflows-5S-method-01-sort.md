---
title: Workflows 5S methodology - sort
author: Dominik Brilhaus
license: CC-BY 4.0
layout: default
---

## **Sort** – Define and isolate workflow steps

- A workflow step should ideally perform only one distinct task
- Avoid mixing (unrelated) processes in a single step
- This improves:
  - Reusability across projects
  - Understandability
  - Clarity around inputs and outputs

---
layout: two-columns
---

## **Sort** – Break into reusable steps

::left::

```yaml [my-fancy-all-in-one-pipeline.py]
import sys
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sort data
data = pd.read_csv("data.csv")
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv("sorted.csv", index=False)

# Plot heatmap
sns.heatmap(data_sorted, cmap="viridis", cbar=True)
plt.title("Heatmap of sorted numeric columns")
plt.savefig("heatmap.png", dpi=150)

# More steps...
...
```

::right::

**My fancy all-in-one cloning protocol (in elabFTW)**

1. Run PCR
2. Ligate plasmid
3. Transform into E. coli
4. Plate on agar
6. Miniprep
7. Sequence verification
8. Analyze results
9. ...

---
layout: two-columns
---

## Step by step

::left::

```yaml [my-fancy-all-in-one-pipeline.py]
import sys
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Sort data
data = pd.read_csv("data.csv")
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv("sorted.csv", index=False)

# Plot heatmap
sns.heatmap(data_sorted, cmap="viridis", cbar=True)
plt.title("Heatmap of sorted numeric columns")
plt.savefig("heatmap.png", dpi=150)

# More steps...
...
```

::right::

```python [sort-csv.py]
import sys
import pandas as pd

# Sort data
data = pd.read_csv("data.csv")
data_sorted = data.sort_values(by=data.columns[0])
data_sorted.to_csv("sorted.csv", index=False)
```

```python [heatmap.py]
# Plot heatmap
import sys
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = pd.read_csv("sorted.csv")
sns.heatmap(data_sorted, cmap="viridis", cbar=True)
plt.title("Heatmap of sorted numeric columns")
plt.savefig("heatmap.png", dpi=150)
```