import { notFound } from 'next/navigation';
import React from 'react';
import { readArticles, Article } from '@/lib/articles';

/* eslint-disable @next/next/no-img-element */

async function getArticle(slug: string): Promise<Article | undefined> {
  const articles = await readArticles();
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
