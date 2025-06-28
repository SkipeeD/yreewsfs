import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import slugify from 'slugify';

const dataFile = path.join(process.cwd(), 'src/data/articles.json');

interface Article {
  title: string;
  slug: string;
  content: string;
  image?: string;
  date: string;
}

export async function GET() {
  try {
    const data = await fs.readFile(dataFile, 'utf8');
    return NextResponse.json(JSON.parse(data));
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
    const articlesRaw = await fs.readFile(dataFile, 'utf8');
    const articles: Article[] = JSON.parse(articlesRaw);
    const created: Article = { title, slug, content, image, date: new Date().toISOString() };
    articles.unshift(created);
    await fs.writeFile(dataFile, JSON.stringify(articles, null, 2));
    return NextResponse.json(created);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Unable to save article' }, { status: 500 });
  }
}
