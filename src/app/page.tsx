import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

const dataFile = path.join(process.cwd(), 'src/data/articles.json');

interface Article {
  title: string;
  slug: string;
  content: string;
  image?: string;
  date: string;
}

async function getArticles(): Promise<Article[]> {
  const data = await fs.readFile(dataFile, 'utf8');
  return JSON.parse(data) as Article[];
}

export default async function Home() {
  const articles = await getArticles();
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Latest Articles</h1>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link href={`/articles/${a.slug}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
