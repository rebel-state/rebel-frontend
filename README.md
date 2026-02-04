# Rebel State

![Rebel State Logo](https://raw.githubusercontent.com/rebel-state/rebel-frontend/main/.github/assets/rebel-state-logo.svg)

Rebel-State is a premier technical collective that empowers organizations with custom tooling, business intelligence & AI integration, autonomous agents, model training, content generation, and educational tooling.

## Engineering the Future

This repository represents the public gateway into the Rebel-State ecosystem. It is currently in active development and is updated frequently.

### Roadmap

```
coming soon
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server                 |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build                 |
| `npm run check`   | Run all checks (Astro, ESLint, Prettier) |
| `npm run fix`     | Fix code issues with ESLint and Prettier |

### Docker Deployment

A Docker configuration is included. Build and run:

```bash
docker build -t rebel-state-frontend .
docker run -p 80:80 rebel-state-frontend
```

### Code Quality Checks

Run all checks:

```bash
npm run check
```

Fix code issues automatically:

```bash
npm run fix
```

## License

This project is licensed under the MIT License. See [LICENSE.md](./LICENSE.md) for details.
