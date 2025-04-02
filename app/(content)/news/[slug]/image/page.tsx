import { DUMMY_NEWS } from '../../../../../dummy-news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }: { params: { slug: string } }) {
  const item = DUMMY_NEWS.find((el) => el.slug === params.slug);
  if (!item) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${item.image}`} alt={item.title} />
    </div>
  );
}
