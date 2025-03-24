import Link from 'next/link';
import { DUMMY_NEWS } from '../../dummy-news';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((el) => {
          return (
            <li key={el.id}>
              <Link href={`/news/${el.slug}`}>
                <img src={`/images/news/${el.image}`} alt={el.title} />
                <span>{el.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
