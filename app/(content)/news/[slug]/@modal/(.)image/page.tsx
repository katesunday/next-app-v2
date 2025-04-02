'use client';
import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '../../../../../../dummy-news';
import React from 'react';

export default function InterceptedImagePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = React.use(props.params);

  const item = DUMMY_NEWS.find((el) => el.slug === slug);
  if (!item) {
    notFound();
  }

  return (
    <div className="modal-backdrop" onClick={router.back}>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </div>
  );
}
