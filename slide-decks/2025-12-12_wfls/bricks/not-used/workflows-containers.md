---
title: Computational Workflows
author: Dominik Brilhaus
license: CC-BY 4.0
date: 2025-10-14
---

# Installing (bioinformatic) tools is fun (?)🎢

- From source: https://www.bioinformatics.babraham.ac.uk/projects/download.html#fastqc
- Docker: `docker pull quay.io/biocontainers/fastqc`
- Conda: `conda install fastqc`
- [TODO] Singularity (no need for root access)
- ...

---
layout: two-columns
---

# Conda

<div class="absolute top-20 left-250">  
  <img alt="CONDA" 
      type="image/svg" width="100" src="https://docs.conda.io/projects/conda/en/latest/_static/conda_logo_full.svg" />
  <a class="text-xs text-gray-400" target="_blank" href="https://conda.io">https://www.conda.io/</a>
</div>


::left::

- Miniconda, Anaconda, Miniforge, ...
- **Package manager** for scientific software  
- Creates **isolated environments**
- Reproducible installation of tools


### Install a conda distribution

https://docs.conda.io/projects/conda/en/latest/user-guide/install/

::right::

### Create environment

```bash
conda create -n cwl_env
conda activate cwl_env
```

### Install tool or package

```bash
conda install cwltool
```

---
layout: two-columns
---

# Avoid using Anaconda and the "default" channel

::left::

### Check the terms of services

- https://www.anaconda.com/pricing/terms-of-service-faqs
- https://docs.conda.io/projects/conda/en/latest/user-guide/configuration/settings.html#config-channels

::right::

### Adapt .condarc to prevent using "default" channel

- Your `.condarc` (e.g. ~/miniconda3/.condarc) should look similar to this

```yaml [.condarc]
channels:
  - conda-forge
  - bioconda
```

---
layout: two-columns
---

<div class="absolute top-20 left-250">
  <img alt="Docker" 
      type="image/svg" width="100" src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" />
  <a class="text-xs text-gray-400" target="_blank" href="https://www.docker.com/">https://www.docker.com/</a>
</div>

# Docker

::left::

- **Containerization platform**
- Bundles software + dependencies
- CWL can define Docker images for each tool

### Install docker

https://docs.docker.com/engine/install/

::right::

### Install tool or package

```bash
docker pull commonworkflowlanguage/cwltool
```

---
layout: two-cols-header
---

# Building a custom Docker image – Dockerfile

::left::

Simple `Dockerfile` for Samtools

<div class="scale-75 origin-left">

```dockerfile [Dockerfile]
# Start from a lightweight base image with Python and system utilities
FROM ubuntu:22.04

LABEL description="Samtools - Tools for alignments in the SAM, BAM, and CRAM formats" \
      version="1.20"

# Install dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        wget \
        build-essential \
        libncurses5-dev \
        libbz2-dev \
        liblzma-dev \
        libcurl4-openssl-dev \
        ca-certificates \
        zlib1g-dev && \
    rm -rf /var/lib/apt/lists/*

# Download and build Samtools from source
WORKDIR /opt
RUN wget https://github.com/samtools/samtools/releases/download/1.20/samtools-1.20.tar.bz2 && \
    tar -xjf samtools-1.20.tar.bz2 && \
    cd samtools-1.20 && \
    ./configure --prefix=/usr/local && \
    make && make install && \
    cd .. && \
    rm -rf samtools-1.20 samtools-1.20.tar.bz2

# Set working directory for user data
WORKDIR /data

# Default command
ENTRYPOINT ["samtools"]
CMD ["--help"]
```

</div>

::right::

<div class="scale-95 origin-right">

### Build the image

```bash
docker build -t samtools:1.20 .
```

### Run container (e.g. check version)

```bash
docker run --rm samtools:1.20 --version
```


</div>


---
layout: two-columns
---

# Using a devcontainer (in VS Code)

::left::

Example folder structure:

```yml
data-analysis/
├── .devcontainer/
│   ├── devcontainer.json
│   └── Dockerfile
├── requirements.txt
└── main.py
```

```dockerfile [.devcontainer/Dockerfile]
FROM python:3.11-slim

# Create a non-root user
RUN useradd -ms /bin/bash vscode

# Install build essentials for scientific Python packages
RUN apt-get update && apt-get install -y --no-install-recommends build-essential && \
    rm -rf /var/lib/apt/lists/*

# Set work directory
WORKDIR /workspace

# Switch to non-root user
USER vscode
```

::right::

```json [.devcontainer/devcontainer.json]
{
  "name": "Python + NumPy Dev Container",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "ms-python.vscode-pylance"
      ]
    }
  },
  "settings": {
    "python.defaultInterpreterPath": "/usr/local/bin/python"
  },
  "postCreateCommand": "pip install -r requirements.txt || true",
  "remoteUser": "vscode"
}
```

```yml [requirements.txt]
numpy
```
