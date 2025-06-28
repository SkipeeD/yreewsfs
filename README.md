# Journalist Site

This project is a very small publishing platform built with Next.js. It was created as a minimal example for hosting on Vercel.

## Features

- Home page that lists all articles
- About and contact pages
- `/admin` page with a WYSIWYG editor for adding new articles (uses Quill)
- Articles are stored in `src/data/articles.json`

## Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. To add an article go to `http://localhost:3000/admin`.

## Deploying

Deploy the repository to Vercel. Because articles are stored in a JSON file, changes will persist only in the deployment environment. For a production setup consider using a real database.

Binary image files were removed so the repository contains only text-based assets and can be pushed to GitHub without large files.

