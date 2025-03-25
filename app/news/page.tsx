import { DUMMY_NEWS } from '../../dummy-news';
import NewsList from '../../components/NewsList';

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <NewsList news={DUMMY_NEWS} />
      </ul>
    </>
  );
}
