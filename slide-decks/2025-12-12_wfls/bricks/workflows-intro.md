---
title: Computational Workflows
author: Dominik Brilhaus
license: CC-BY 4.0
date: 2025-10-14
---

## Are we **FAIR**, yet?

### what's written

"*FastQC v0.12.1 was employed for read quality control using default parameters.*"

### what's done

```bash
fastqc assays/rnaseq/dataset/sample1.fastq.gz
fastqc assays/rnaseq/dataset/sample2.fastq.gz
fastqc assays/rnaseq/dataset/ ...
```


---

# Are we **FAIR**, yet?

- where did I click
- reproducibility
- record exactly what was done
- history
- instruction
- tool version
- ...

<!-- 
- Installation / Environment
- Version
- Input / Output
 -->

<div class="absolute bottom-20 left-20">
*FAIR: Findable, Accessible, Interoperable, Reusable
</div>


---

# Some factors affecting [reproduci|reusa|replica]bility

- Version of tool, software, package, or library
- Version of interpreter (python, R, F#, etc.)
- Operating system (linux, win, mac) and version
- ...

---
layout: two-columns
---

## What are computational workflows?

::left::

- Define **steps** in data analysis (e.g., preprocessing → alignment → QC)
- Each step specifies:
  - **Inputs**
  - **Outputs**
  - **Tools / Commands**
- Enable:
  - Reproducibility  
  - Portability  
  - Scalability

::right::

- **Reproducibility** of the data
- **Replicability** of the analysis


```mermaid
flowchart LR
  f1("dataset1") ---p1[analysis pipeline]--> r1("results1")
classDef one fill:#62d4c1;
class f1,r1 one;
```

```mermaid
flowchart LR
  f1("dataset1") ---p1[analysis pipeline]--> r1("results1")
classDef one fill:#62d4c1;
class f1,r1 one;
```

Re-running the **same** analysis on the **same** dataset

- **Reusability** of the analysis

```mermaid
flowchart LR
  f2("dataset2") ---p1[analysis pipeline]--> r2("results2")
classDef two fill:#ffd34d;
class f2,r2 two;
```

Applying the same analysis on **another** dataset

