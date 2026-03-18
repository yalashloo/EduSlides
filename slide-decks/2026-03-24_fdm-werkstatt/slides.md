---
theme: ../../themes/dataplant-ceplas-mibinet
themeConfig:
  paginationX: r
  paginationY: b
  paginationPagesDisabled: [ 1 ]
  logoPagesDisabled: [ 1 ]
date: 2026-03-24
title: "Turning Research Projects into FAIR Digital Objects: a Hands-On Introduction to Annotated Research Contexts (ARCs) and ELN integration"
author: 
  - Yaser Alashloo, [CEPLAS Data](https://www.ceplas.eu/en/research/ceplas-data)
  - Sabrina Zander, [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  - Xiaoran Zhou, [Bioinformatik (IBG-4)](https://www.fz-juelich.de/de/ibg/ibg-4/forschung-1/omics-datenbasierte-bioinformatik/datenbanken-und-data-science-1)

description: Introducing ARC with a hands-on demo.
fonts:
  sans: Gulim
canvasWidth: 1200
transition: slide-left
favicon: https://raw.githubusercontent.com/nfdi4plants/Branding/refs/heads/master/icons/DataPLANT/favicons/favicon_bg_darkblue.png
drawings:
  enabled: true
  persist: false
layout: cover

---
## Turning Research Projects into FAIR Digital Objects: a Hands-On Introduction to Annotated Research Contexts (ARCs) and ELN integration

<br>
<br>

  Yaser Alashloo, [HHU Düsseldorf](https://www.ceplas.eu/en/research/ceplas-data)<br>
  Sabrina Zander, [HHU Düsseldorf](https://www.sfb1535.hhu.de/projects/research-area-z/z03)<br>
  Xiaoran Zhou, [Forschungszentrum Jülich](https://www.fz-juelich.de/de/ibg/ibg-4/forschung-1/omics-datenbasierte-bioinformatik/datenbanken-und-data-science-1)


---
src: './custom/goals.md'
---

---
src: './custom/participants.md'
---

---
src: './custom/why-rdm.md'
---

---
src: ../../EduBricks-EduPaths/EduBricks/nfdi.md#1
---

---
src: './custom/ceplas-dataplant.md'
---

---
src: './custom/002-annotated-research-context.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/003-the-arc-scaffold-structure.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/001-arc-standards.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/004-isa-abstract-model-in-a-nutshell.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/011-data-analysis-cwl-workflows-and-runs.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/dataplant/datahub-plantdatahub.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/017-arc-ecosystem.md'
---

---
src: './custom/dataplant-resources.md'
---

---
src: './custom/acknowledgements.md'
---

---
src: './custom/checkpoint-1.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/arc-intro/006-metadata-annotation-from-sample-to-data.md'
---

---
layout: default
---

## Divide and conquer for reproducibility

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-study-divide-conquer.svg" />

---
layout: default
---

## Identifying the ‘study’ part

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-study-identify.svg"/>

---
layout: default
---

## A table-based organization schema

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-metadata-table-representation.svg" />

---
layout: two-columns
---

## Referencing a protocol

::left::

This allows you to reference the free-text, human-readable protocol.

💡 It is recommended that the protocol is in an open format (.md|.txt|.docx|…)

💡 But everything is possible also an URI to an electronic lab notebook

::right::

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-study-protocolref.svg" />

---
layout: default
---

## Parameterizing the ‘study’

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-study-parameterization.svg" />

---
layout: two-columns
---

## Finding the right metadata vocabulary

::left::

### Parameters []

- Light intensity 200 µEinstein
- Temperature 6°C / 25°C
- Growing 4d

::right::

### Characteristics []
  
- Arabidopsis thaliana
- Leaf
- Hydroponic culture
- Columbia

---
layout: default
---

## OLS: Finding the right metadata vocabulary

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/screenshots/ontology-lookup-service.png" width="70%"/>

Ontology Lookup Service (OLS): https://www.ebi.ac.uk/ols4/

---
layout: default
---

## Finding the metadata vocabulary and descriptors

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-metadata.svg" />

---
layout: two-columns
---

## Finding the metadata vocabulary and descriptors

::left::

### Parameters []

- <span class="yellowblock"></span> Light intensity
  - <span class="blueblock"></span> 200 µEinstein
- <span class="yellowblock"></span> Temperature  
  - <span class="blueblock"></span> 6°C / 25°C
- <span class="yellowblock"></span> Growth time
  - <span class="blueblock"></span> 4d

::right::

### Characteristics []

- <span class="yellowblock"></span> Organism
  - <span class="blueblock"></span> Arabidopsis thaliana
- <span class="yellowblock"></span> Tissue
  - <span class="blueblock"></span> Leaf
- <span class="yellowblock"></span> Growth medium
  - <span class="blueblock"></span> Hydroponic culture
- <span class="yellowblock"></span> Ecotype
  - <span class="blueblock"></span> Columbia



---
src: './custom/checkpoint-2.md'
---

---
layout: default
---

## Identifying assays

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-identify.svg"/>

---
layout: default
---

## Assay for sugar measurement

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-sugar.svg" />

---
layout: default
---

## Separating different assay elements

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-modular2.svg" />

---
layout: default
---

## Isolating the lab processes in an assay

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-modular1.svg"/>

---
layout: two-columns
---

## Parameterization: sugar extraction

::left::

- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> Vortex Mixer
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 3 seconds
- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> Temperature  
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 95 degree celsius

::right::

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-labprocess1-extraction.svg" />

---
layout: two-columns
---

## Parameterization: sugar measurement

::left::

- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> technical replicate
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 1,2,3,...
- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> sample volume 
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 10 `microliter`
- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> buffer volume 
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 190 `microliter`
- <span style="display: inline-block;width: 1em;height: 1em;background-color: #FFC000;"></span> cycle count
  - <span style="display: inline-block;width: 1em;height: 1em;background-color: #2D3E50;"></span> 5

::right::

<img src="https://raw.githubusercontent.com/EduBricksHub/EduImages/1eaacfdc463867832a2f847a3da571f5cf2d2b11/figures/arc-prototypic/arc-prototypic-assay-labprocess2-measurement.svg" />


---
src: '../../EduBricks-EduPaths/EduBricks/elab2arc/elab2arc-connection.md'
---

---
src: '../../EduBricks-EduPaths/EduBricks/elab2arc/elab2arc-mapping.md'
---

---
src: './custom/checkpoint-3.md'
---

