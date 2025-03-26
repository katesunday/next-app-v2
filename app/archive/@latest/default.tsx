import { getLatestNews } from '../../../lib/news';
import NewsList from '../../../components/NewsList';

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
