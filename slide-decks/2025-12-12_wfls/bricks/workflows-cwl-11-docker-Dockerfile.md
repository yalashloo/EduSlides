---
title: workflows-cwl-11-docker-Dockerfile
author: Dominik Brilhaus
license: CC-BY 4.0
layout: default
---

## Reference a local `Dockerfile`

If no suitable container is available, you can add your own `Dockerfile` 

```dockerfile [Dockerfile]
FROM python:3.10-slim
RUN pip install pandas==1.5.3
```

```yaml [workflow.cwl]
...
hints:
  DockerRequirement:
    dockerImageId: "mydocker"
    dockerFile: {$include: "Dockerfile"}
...
```