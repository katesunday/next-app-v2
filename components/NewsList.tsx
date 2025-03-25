import React from 'react';
import { NewsType } from '../dummy-news';
import Link from 'next/link';

export default function NewsList({ news }: { news: NewsType[] }) {
  return (
    <>
      {news.map((el) => {
        return (
          <li key={el.id}>
            <Link href={`/news/${el.slug}`}>
              <img src={`/images/news/${el.image}`} alt={el.title} />
              <span>{el.title}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
}
