import Link from 'next/link';

export default function NewsPage() {
  return (
    <div id="home">
      <h1>News Page</h1>
      <div className="news-list">
        <Link href="/news/article-1">Article 1</Link>
        <Link href="/news/article-2">Article 2</Link>
        <Link href="/news/article-3">Article 3</Link>
      </div>
    </div>
  );
}
