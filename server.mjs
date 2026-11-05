import { createServer } from "node:http";
import { readFileSync } from "node:fs";

const page = readFileSync(new URL("./index.html", import.meta.url));
const server = createServer((request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Content-Security-Policy", "default-src 'none'; frame-ancestors 'none'; base-uri 'none'");
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.setHeader("Allow", "GET, HEAD");
    response.writeHead(405).end();
    return;
  }
  const path = request.url?.split("?", 1)[0];
  if (path === "/health") {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }).end("ok");
    return;
  }
  if (path !== "/") {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Content-Length": page.length });
  response.end(request.method === "HEAD" ? undefined : page);
});
server.listen(8080, "0.0.0.0");
