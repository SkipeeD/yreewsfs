import Link from 'next/link';
import { readArticles } from '@/lib/articles';

export default async function Home() {
  const articles = await readArticles();
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
