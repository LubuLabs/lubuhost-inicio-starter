FROM node:22-alpine@sha256:fe4f6d74e20370acb04ad889077d14d0f64a9c8ea6a42bc60cddf1e844699914
WORKDIR /app
COPY --chown=1000:1000 server.mjs index.html ./
USER 1000:1000
EXPOSE 8080
CMD ["node", "server.mjs"]
