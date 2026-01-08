---
title: CWL Demo FastQC
author: Dominik Brilhaus
license: CC-BY 4.0
date: 2025-10-14
---

# Example tool: FastQC

First step in RNASeq data analysis: QC of read files (e.g. *.fastq)

```mermaid
flowchart LR
  f1("Reads (*.fastq)") ---p1[QC]--> f3("QualityReport (*.html)")
  subgraph p1[QC]
      p1-1{{FastQC}}
  end
```

---
layout: two-columns
---

# FastQC has a GUI

::left::

```mermaid
flowchart TD
  f1("Reads (*.fastq)") ---p1[QC]--> f3("QualityReport (*.html)")
  subgraph p1[QC]
      p1-1{{FastQC}}
  end
```

::right::

![](../assets/fastqc-gui.png)


---

# Command line tool

- Some tool that you can run ... on the command line
- Example:
  - CLI: **ARC Commander**
  - (GUI: **ARCitect**)
- Takes arguments or parameters as **inputs**
- Generates **outputs**

---

# FastQC via command line

```bash
fastqc --version
fastqc --help
```

---

# FastQC via command line

`fastqc assays/rnaseq/dataset/blau1_CGATGT_L005_R1_002.fastq.gz`

```mermaid
flowchart LR
  f1("Reads (*.fastq)") ---p1[QC]--> f3("QualityReport (*.html)")
  subgraph p1[QC]
      p1-1{{FastQC}}
  end
```


---
layout: center
---

# Demo: CWL-Wrapping the CommandLineTool FastQC

---
layout: two-columns
---

# Step 1: Define CLI tool as CWL CommandLineTool

::left::

- Without in/out
- (Requires **local tool installed**)


```yaml [workflow.cwl]
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

baseCommand: ["fastqc", "--help"]

inputs: []
 
outputs: []
```

::right::

```mermaid
flowchart TD
  subgraph p1[workflow.cwl]
      p1-1{{fastqc --help}}
  end
```



---
layout: two-columns
---

# Step 2: Add a docker container

::left::

```yaml [workflow.cwl] {5-7}
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

hints:
  DockerRequirement:
    dockerPull: quay.io/biocontainers/fastqc:0.11.9--hdfd78af_1

baseCommand: ["fastqc", "--help"]

inputs: []
 
outputs: []
```

::right::

<div class="scale-75 origin-top">

```mermaid
flowchart TD
  subgraph p1[workflow.cwl]
      p1-1{{fastqc --help}}
      d(fastqc docker) --- p1-1
  end
```

</div>

---
layout: two-columns
---

# Step 3: Define inputs

::left::

```yaml [workflow.cwl] {12-19}
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

hints:
  DockerRequirement:
    dockerPull: quay.io/biocontainers/fastqc:0.11.9--hdfd78af_1

baseCommand: ["fastqc"]

inputs:
  reads:
    type: File[]
    inputBinding:
      position: 1

arguments: 
  - valueFrom: $(runtime.outdir)
    prefix: "-o"
 
outputs: []
```

::right::

<div class="scale-75 origin-top">

```mermaid
flowchart TD
  f1("Reads (*.fastq)") ---p1
  subgraph p1[workflow.cwl]
      p1-1{{FastQC}}
      d(fastqc docker) --- p1-1
  end
```

</div>


---
layout: two-columns
---

# Step 4: Define outputs

::left::

```yaml [workflow.cwl] {21-27}{maxHeight:'70%'}
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

hints:
  DockerRequirement:
    dockerPull: quay.io/biocontainers/fastqc:0.11.9--hdfd78af_1

baseCommand: ["fastqc"]

inputs:
  reads:
    type: File[]
    inputBinding:
      position: 1

arguments: 
  - valueFrom: $(runtime.outdir)
    prefix: "-o"

outputs:
  fastqc_out:
      type: File[]
      outputBinding:
        glob:
          - "*_fastqc.zip"
          - "*_fastqc.html"
```

::right::

<div class="scale-75 origin-top">


```mermaid
flowchart TD
  f1("Reads (*.fastq)") ---p1--> f3("QualityReport (*_fastqc.zip, *_fastqc.html)")
  subgraph p1[workflow.cwl]
      p1-1{{fastqc}}
      d(fastqc docker) --- p1-1
  end
```

</div>


---
layout: two-cols-header
---

# Run the workflow

You can provide arguments via another file:

::left::

```yaml [run.yml]
reads:
  - class: File
    path: ../../assays/rnaseq/dataset/blau1_CGATGT_L005_R1_002.fastq.gz
  - class: File
    path: ../../assays/rnaseq/dataset/blau2_TGACCA_L005_R1_002.fastq.gz
```


::right::

<div class="scale-75 origin-top">

```mermaid
flowchart TD
   f1 ---p1--> f3("QualityReport (*_fastqc.zip, *_fastqc.html)")
  subgraph run.yml
   f1("reads (*.fastq.gz)")
  end  

subgraph p1[workflow.cwl]
      p1-1{{FastQC}}
      d(fastqc docker) --- p1-1
  end
```

</div>


---
layout: two-cols-header
---

# Run the workflow

You can provide arguments via another file:

::left::

```yaml [run.yml]
reads:
  - class: File
    path: ../../assays/rnaseq/dataset/blau1_CGATGT_L005_R1_002.fastq.gz
  - class: File
    path: ../../assays/rnaseq/dataset/blau2_TGACCA_L005_R1_002.fastq.gz
```

```yaml [workflow.cwl] {11-13}
#!/usr/bin/env cwl-runner
cwlVersion: v1.2
class: CommandLineTool

hints:
  DockerRequirement:
    dockerPull: quay.io/biocontainers/fastqc:0.11.9--hdfd78af_1

baseCommand: ["fastqc"]

inputs:
  reads:
    type: File[]
    inputBinding:
      position: 1
...
```

::right::

<div class="scale-85 origin-top">

```mermaid
flowchart LR
   f1 ---p1--> f3("QualityReport (*_fastqc.zip, *_fastqc.html)")
  subgraph run.yml
   f1("reads (*.fastq.gz)")
  end  

subgraph p1[workflow.cwl]
      p1-1{{FastQC}}
      d(fastqc docker) --- p1-1
  end
```

</div>

<div class="scale-95 origin-right">


```bash
cwltool workflow.cwl run.yml
```

</div>


---
layout: default
---

# Growing pipeline: First steps RNASeq pipeline

```mermaid
flowchart LR
  f1("Reads (*.fastq)") ---p1[QC]--> f3(QualityReport)
  f1 ---p2--> f2(reads_trimmed)
  f2(reads_trimmed) ---p1--> f4(QualityReport_trimmed)
  f2(reads_trimmed) ---p3--> f5(counts)
  subgraph p1[QC]
      p1-1{{FastQC}}
  end
  subgraph p2[Trimming]
      p2-1{{trimmomatic}}
  end
  subgraph p3[Quantification]
      p3-1{{Kallisto}}
  end
```

---