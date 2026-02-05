# Project Context: Rebel State Frontend

## Project Overview

This is a professional website and application for **Rebel State**, focused on business intelligence, automation, and AI integration. The goal is to provide a landing page, blog, and service portal that serves as a hub for generative AI tools and e-commerce.

## Tech Stack

- **Framework:** Astro (using the AstroWind starter)
- **Styling:** Tailwind CSS
- **Source Control:** GitHub
- **Deployment:** Vercel
- **Content Source:** VS-Code, Obsidian (From mobile)

## Development Rules & Constraints

1. **Content Preservation:** Ask before modifying content
2. **Component Architecture:** Follow the established AstroWind patterns. Use functional, reusable components within `src/components/`.
3. **Styling:** Use Tailwind CSS utility classes exclusively. Avoid writing custom CSS in `<style>` blocks unless absolutely necessary for third-party integrations.
4. **Tooling:** Always check for compatibility with Astro's server-side rendering (SSR) when adding new libraries.
5. **Source Control:** Always make certain that changes are done on specific feature/development branches and use pull requests through github to merge them into the main(production) branch.

## Active Goals

- **MVP Completion:** Finalize the design, content-containers, workflow, landing page, service pages, product pages, initial blog content and contact form.
- **Analytics:** Ensure analytics tracking is correctly implemented for user insights.
- **Service Promotion:** Build out sections highlighting automation and AI integration services.
- **Product Promotion:** Build out sections highlighting proton products and affiliate links for these products.

## Future Roadmap

- Implementation of an admin backend with authentication.
- E-commerce integration for affiliate marketing and dropshipping.
- Development of custom generative AI tools directly on the site.

## Reference Commands

- `npm run dev` - Start the local development server.
- `npm run build` - Build the production site.
- `npm run preview` - Preview the production build locally.
