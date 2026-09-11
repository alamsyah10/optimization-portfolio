# Optimization Portfolio

Personal portfolio and technical blog for documenting my learning and projects around software engineering, mathematical optimization, and algorithms.

The site is built with Astro and is used to publish project write-ups, technical notes, and experiments related to topics such as workforce scheduling, constraint programming, and optimization modeling.

## Tech Stack

- Astro
- MDX
- Tailwind CSS
- TypeScript
- GitHub Pages

## Getting Started

### Requirements

Make sure Node.js is installed.

You can check your current version with:

```bash
node --version
```

This project uses Astro 7, so Node.js 22.12+ is recommended.

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Astro will start a local development server, usually at:

```text
http://localhost:4321
```

Open the URL shown in your terminal.

## Build

To create a production build:

```bash
npm run build
```

The generated static files will be placed in:

```text
dist/
```

You can preview the production build locally with:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── Header.astro
│   └── Footer.astro
│
├── content/
│   └── blog/
│
├── data/
│   └── site.ts
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro
│   └── blog/
│
├── styles/
│   └── global.css
│
└── utils/
```

### `src/pages`

Contains the main website pages.

The homepage is located at:

```text
src/pages/index.astro
```

### `src/content/blog`

Contains technical articles written in Markdown or MDX.

For example:

```text
src/content/blog/workforce-shift-optimizer-part-1.mdx
```

### `src/data/site.ts`

Contains personal information and links used across the site, such as:

- name
- introduction
- email
- GitHub
- LinkedIn

## Writing a Blog Post

Create a new `.md` or `.mdx` file inside:

```text
src/content/blog/
```

Example:

```md
---
title: "Building a Workforce Shift Optimizer"
description: "Exploring how business rules can be modeled as optimization constraints."
pubDate: 2026-09-12
tags:
  - Optimization
  - CP-SAT
  - Scheduling
draft: false
---

# Introduction

Article content goes here.
```

MDX can also be used when the article needs custom Astro or UI components.

## GitHub Pages

This website is deployed using GitHub Pages.

Current deployment URL:

```text
https://alamsyah10.github.io/optimization-portfolio/
```

The GitHub Pages configuration is defined in:

```text
astro.config.mjs
```

Deployment is handled automatically by:

```text
.github/workflows/deploy.yml
```

Every push to the `main` branch triggers a new build and deployment.

## Useful Commands

```bash
# Start local development server
npm run dev

# Create production build
npm run build

# Preview production build
npm run preview
```

## Current Focus

The first series of articles focuses on workforce shift optimization.

Topics I plan to explore include:

- workforce scheduling
- constraint programming
- Google OR-Tools CP-SAT
- hard and soft constraints
- objective function design
- optimization model debugging
- algorithm comparison
- backend integration for optimization systems

This repository will continue to evolve as I learn and build more optimization-related projects.
