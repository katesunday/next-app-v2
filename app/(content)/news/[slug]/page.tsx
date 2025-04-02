import { DUMMY_NEWS } from '../../../../dummy-news';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type NewsParamProps = {
  params: { slug: string };
};
export default function NewsItemPage({ params }: NewsParamProps) {
  const item = DUMMY_NEWS.find((el) => el.slug === params.slug);
  if (!item) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${item.slug}/image`}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </Link>

        <h1>{item.title}</h1>
        <time dateTime={item.date}>{item.date}</time>
      </header>
      <p>{item.content}</p>
    </article>
  );
}
