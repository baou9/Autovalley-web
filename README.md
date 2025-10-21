# Auto Valley Website

A responsive marketing site for the Auto Valley automotive service center in Casablanca. The project features semantic HTML, modern CSS, and light JavaScript to deliver a fast, conversion-focused experience across desktop, tablet, and mobile.

## Getting Started
Open `index.html` in your browser or serve the repository locally (e.g., `python -m http.server`) to view the pages.

### Optional Node workflow

Some hosting providers expect a Node-based build step. Run the lightweight build script to copy the static assets into a `dist/` folder:

```bash
npm install # no dependencies, but initializes the lockfile
npm run build
```

The `build` command does not require `nodenv`; any Node.js runtime `>=16` will work. The generated `dist/` directory can be uploaded directly to your hosting provider. If your platform allows you to configure the build command, set it to `npm run build` and the publish directory to `dist`.

## Pages
- `index.html` – Homepage with hero, services, sustainability highlights, testimonials carousel, FAQs, and CTAs.
- `about.html` – Company history, mission, and team highlights.
- `book.html` – Service booking flow with contact form and FAQ support.
- `contact.html` – Location, contact details, and direct inquiry form.

## Assets
To keep the repository binary-free, imagery is represented by CSS-based placeholders and inline data URIs for the Auto Valley logo. Update the markup or styles if you need to integrate production-ready photography.

