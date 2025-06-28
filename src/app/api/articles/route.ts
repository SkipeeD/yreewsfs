import { NextRequest, NextResponse } from 'next/server';
import slugify from 'slugify';
import { readArticles, writeArticles, Article } from '@/lib/articles';

export async function GET() {
  try {
    const articles = await readArticles();
    return NextResponse.json(articles);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Unable to read articles' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content, image } = body;
    const slug = slugify(title, { lower: true, strict: true });
    const articles = await readArticles();
    const created: Article = { title, slug, content, image, date: new Date().toISOString() };
    articles.unshift(created);
    await writeArticles(articles);
    return NextResponse.json(created);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Unable to save article' }, { status: 500 });
  }
}
