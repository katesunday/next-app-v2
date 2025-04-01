import { notFound } from 'next/navigation';
import { DUMMY_NEWS } from '../../../../../dummy-news';

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
    <div className="modal-backdrop">
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </div>
  );
}
