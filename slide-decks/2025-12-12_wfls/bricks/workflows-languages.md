---
title: Workflow Languages
author: Dominik Brilhaus
license: CC-BY 4.0
date: 2025-10-14
layout: two-columns
---

## Workflow Languages

::left::

- Nextflow (.nf)
  - https://nextflow.io
  - Domain-specific language for pipelines
- Snakemake (.smk)
  - https://snakemake.github.io
  - Makefile-like workflows in Python
  - Easy syntax, flexible, local-friendly

::right::

- Galaxy Workflows (.ga)
  - https://galaxyproject.org
  - GUI-based workflow design
- CWL (.cwl)
  - https://www.commonwl.org/
  - Open standard for describing analysis workflows
  - Interoperable & portable
- ...

---

# CWL: Common Workflow Language

<div class="absolute top-20 left-200">
  <img alt="Common Workflow Language" 
      type="image/svg" width="200" src="https://cdn.rawgit.com/common-workflow-language/logo/0b98d341/CWL-Logo-nofonts.svg" />
  <a class="text-xs text-gray-400" target="_blank" href="https://www.commonwl.org/">https://www.commonwl.org</a>
</div>

- Open community standard
- Describes:
  - Tools (command-line wrappers)
  - Workflows (combining tools)
- YAML-based description of:
  - Inputs & Outputs
  - Dependencies (e.g. Docker container)
  - Resource needs (e.g. RAM, cores)

---
layout: default
---

<div class="absolute top-20 left-200">
  <img alt="Common Workflow Language" 
      type="image/svg" width="200" src="https://cdn.rawgit.com/common-workflow-language/logo/0b98d341/CWL-Logo-nofonts.svg" />
  <a class="text-xs text-gray-400" target="_blank" href="https://www.commonwl.org/">https://www.commonwl.org</a>
</div>

# CWL is a time investment at first

There's a *tiny* learning curve and some dependencies

- Docker
- Conda and the cwltool (or other reference runner)
- JavaScript (good to know for file handling)
- ...

... but it pays off!

---
layout: center
---

# CWL Resources

- CWL user guide: https://www.commonwl.org/user_guide/
- Specification v1.2: https://www.commonwl.org/v1.2/CommandLineTool.html
- CWL Discourse: https://cwl.discourse.group
- CWL tool: https://github.com/common-workflow-language/cwltool
- CWL tool docs: https://cwltool.readthedocs.io/en/latest/

# CWL workflow repos

- Published CWL Workflows: https://view.commonwl.org/workflows
- CWL repos: https://www.commonwl.org/repos/
- Bio-cwl-tools: https://github.com/common-workflow-library/bio-cwl-tools/
