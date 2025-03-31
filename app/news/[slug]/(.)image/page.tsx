import { DUMMY_NEWS } from '../../../../dummy-news';
import { notFound } from 'next/navigation';

export default function InterceptedImagePage({
  params,
}: {
  params: { slug: string };
}) {
  const item = DUMMY_NEWS.find((el) => el.slug === params.slug);
  if (!item) {
    notFound();
  }
  return (
    <>
      <h2>INTERCEPTED</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${item.image}`} alt={item.title} />
      </div>
    </>
  );
}
