import fs from 'fs/promises';
import path from 'path';

export interface Article {
  title: string;
  slug: string;
  content: string;
  image?: string;
  date: string;
}

const defaultPath = process.env.VERCEL
  ? '/tmp/articles.json'
  : path.join(process.cwd(), 'src/data/articles.json');

const dataFile = process.env.DATA_FILE || defaultPath;

async function ensureFile() {
  try {
    await fs.access(dataFile);
  } catch {
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    await fs.writeFile(dataFile, '[]');
  }
}

export async function readArticles(): Promise<Article[]> {
  await ensureFile();
  const data = await fs.readFile(dataFile, 'utf8');
  return JSON.parse(data) as Article[];
}

export async function writeArticles(articles: Article[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(dataFile, JSON.stringify(articles, null, 2));
}
