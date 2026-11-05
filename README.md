# LubuHost Inicio starter

A small static application for testing the managed LubuHost deployment path.
It listens on port 8080 and serves a startup page and a health endpoint.
The image has no application dependencies, secrets or customer configuration.

```sh
docker build -t lubuhost-inicio-starter .
docker run --rm -p 127.0.0.1:8080:8080 lubuhost-inicio-starter
```
