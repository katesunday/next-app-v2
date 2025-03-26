import NewsList from '../../../../components/NewsList';
import { getAvailableNewsYears, getNewsForYear } from '../../../../lib/news';
import Link from 'next/link';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  let news = null;
  if (!!filter) {
    news = getNewsForYear(filter[0]);
  }

  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {filter && filter[0] && <NewsList news={news} />}
    </>
  );
}
