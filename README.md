# Journalist Site

This project is a very small publishing platform built with Next.js. It was created as a minimal example for hosting on Vercel.

## Features

- Home page that lists all articles
- About and contact pages
- `/admin` page with a WYSIWYG editor for adding new articles (uses Quill)
- Articles are stored in a JSON file. Locally this is `src/data/articles.json`, while
  on Vercel the file is written to `/tmp/articles.json` which persists for the life
  of the deployment instance only.

## Development

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. To add an article go to `http://localhost:3000/admin`.

## Deploying

Deploy the repository to Vercel and set the `DATA_FILE` environment variable if you want to use a custom storage location. By default Vercel writes to `/tmp/articles.json`, which is removed when the deployment is rebuilt. For a production setup use a persistent database.

Binary image files were removed so the repository contains only text-based assets and can be pushed to GitHub without large files.

