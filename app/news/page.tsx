import Link from 'next/link';
import { DUMMY_NEWS } from '../../dummy-news';
import Image from 'next/image';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/news/${el.slug}`}>{el.title}</Link>
              <Image
                src={`/images/news/${el.image}`}
                alt={el.title}
                width={40}
                height={40}
              />
            </li>
          );
        })}
        {/*<li>*/}
        {/*  <Link href="/news/article-1">Article 1</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href="/news/article-2">Article 2</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link href="/news/article-3">Article 3</Link>*/}
        {/*</li>*/}
      </ul>
    </>
  );
}
