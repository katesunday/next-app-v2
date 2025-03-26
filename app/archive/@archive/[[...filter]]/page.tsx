import NewsList from '../../../../components/NewsList';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '../../../../lib/news';
import Link from 'next/link';
import { NewsType } from '../../../../dummy-news';

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let links = getAvailableNewsYears();

  let news: NewsType[];
  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = getAvailableNewsMonths(selectedYear);
  }
  let newsContent = <p>No news found for the selected period. </p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li
                  key={link}
                  style={
                    selectedYear == link || selectedMonth == link
                      ? { textDecoration: 'underline' }
                      : undefined
                  }
                >
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {selectedYear && newsContent}
    </>
  );
}
