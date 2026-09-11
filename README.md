# Optimization Portfolio

Personal portfolio and technical blog focused on optimization engineering, algorithms, and backend systems.

## Stack

- Astro 7
- MDX
- Tailwind CSS 4
- GitHub Pages

## Local development

Astro 7 requires Node.js 22.12+.

```bash
npm install
# Commit the generated package-lock.json as well.
npm run dev
```

Open the local URL printed by Astro.

## Customize before publishing

### 1. Personal links

Edit `src/data/site.ts`:

- email
- GitHub URL
- LinkedIn URL
- intro / skills if needed

### 2. GitHub Pages URL

Edit `astro.config.mjs`:

```js
site: 'https://YOUR_USERNAME.github.io',
base: '/optimization-portfolio',
```

If you rename the repository, change `base` to match the repository name.

If your repository itself is named `YOUR_USERNAME.github.io`, remove the `base` option entirely.

### 3. Add a blog post

Create a new `.md` or `.mdx` file under:

```text
src/content/blog/
```

Use frontmatter like:

```yaml
---
title: "Article title"
description: "Short description"
pubDate: 2026-09-12
tags: ["Optimization", "CP-SAT"]
draft: false
---
```

## Deploy to GitHub Pages

1. Create a GitHub repository named `optimization-portfolio`.
2. Push this project to the `main` branch.
3. Open **Settings → Pages** in the GitHub repository.
4. Set **Source** to **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` will build and deploy automatically on every push to `main`.

Your site will be available at:

```text
https://YOUR_USERNAME.github.io/optimization-portfolio/
```

## Useful commands

```bash
npm run dev
npm run build
npm run preview
```
