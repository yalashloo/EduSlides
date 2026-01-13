---
title: workflows-cwl-08-metadata
author: Dominik Brilhaus
license: CC-BY 4.0
layout: default
---

## Use semantics for metadata annotation

Adding namespaces and schemas allows to reuse them elsewhere in a CWL document

`workflow.cwl`

```yaml 
...
$namespaces:
  s: https://schema.org/
  edam: https://edamontology.org/

$schemas:
  - https://schema.org/version/latest/schemaorg-current-https.rdf
  - https://edamontology.org/EDAM_1.18.owl
...
```

---
layout: default
---

## Attribute authors and contributors

`workflow.cwl`

```yaml 
...
s:author:
  - class: s:Person
    s:identifier: https://orcid.org/0000-0001-9021-3197
    s:email: mailto:brilhaus@hhu.de
    s:name: Dominik Brilhaus

s:contributor:
  - class: s:Person
    s:identifier: <contributor ORCID>
    s:email: mailto:<contributor email>
    s:name: <contributor name>
...
$namespaces:
  s: https://schema.org/
...
```
