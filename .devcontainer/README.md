This devcontainer is configured for local development of the Rebel-State frontend.

Notes:
- It uses the official Node.js devcontainer image so the container is optimized for development (node, npm, common tools).
- The repo's root is mounted at /workspace inside the container.
- On first start the container runs `npm install` to install dependencies.
- Forwarded ports: 3000, 8080 (Astro dev or preview).

Using the container:
1. Open the repository in VS Code.
2. Open the Command Palette (Ctrl+Shift+P) -> Remote-Containers: Reopen in Container.
3. After the container starts, run `npm run dev` to start the dev server.

Why not reuse the existing Dockerfile?
- The repository's Dockerfile builds a production nginx image (it runs `npm run build` and packages output into nginx). That's not suitable for interactive development where you want a running Node dev server and hot reload. This devcontainer uses a Node dev image instead.

If you prefer a Dockerfile/devcontainer that uses the repo Dockerfile, I can add a docker-compose override that runs the image with a mounted workspace and a dev command, but the repo's Dockerfile will need adjustment to support a dev workflow (e.g., not copy built assets into nginx).
