import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import React from 'react';

const dataFile = path.join(process.cwd(), 'src/data/articles.json');

interface Article {
  title: string;
  slug: string;
  content: string;
  image?: string;
  date: string;
}

async function getArticle(slug: string): Promise<Article | undefined> {
  const data = await fs.readFile(dataFile, 'utf8');
  const articles: Article[] = JSON.parse(data);
  return articles.find((a) => a.slug === slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return notFound();
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.image && <img src={article.image} alt="" className="mb-4" />}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}
