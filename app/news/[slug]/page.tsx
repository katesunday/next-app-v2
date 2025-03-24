import { DUMMY_NEWS } from '../../../dummy-news';

type NewsParamProps = {
  params: { slug: string };
};
export default function NewsItemPage({ params }: NewsParamProps) {
  const item = DUMMY_NEWS.find((el) => el.slug === params.slug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${item.image}`} alt={item.title} />
        <h1>{item.title}</h1>
        <time dateTime={item.date}>{item.date}</time>
      </header>
      <p>{item.content}</p>
    </article>
  );
}
