---
layout: two-columns
---

# Summary: 5S for Bioinformatic Workflows

::left::

<div class="text-sm">


- **Sort**
  - Define and isolate workflow steps
- **Set-in-order**
  - Separate data analysis logic from the actual data
  - Parameterize your scripts
  - Modularize your code
- **Shine**
  - Record tool dependencies
  - Specify resource requirements
  - Use semantics for metadata annotation
  - Attribute authors and contributors
- **Standardize**
  - Uncouple processes from the execution environment
  - Use containers
- **Sustain**
  - Publish and (re)integrate your workflow / step

</div>

::right::

```mermaid
graph LR
  A(sort)
  B(set in order)
  C(shine)
  D(standardize)
  E(sustain)

  A --> B --> C --> D --> E --> A

classDef step stroke:#333,stroke-width:1px;
class A,B,C,D,E step;
```
