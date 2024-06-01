import Link from 'next/link';
import Image from 'next/image';

import type { CardProps } from './types';

export const Card = ({ title, slug, date, imageSource }: CardProps) => (
  <Link className='featured-items__article' href={`/blog/${slug}`}>
    <Image
      className='featured-items__article-img'
      src={imageSource}
      alt='Article card image'
      width={420}
      height={355}
      priority
    />
    <div className='featured-items__article-text'>
      <h5>{title}</h5>
      {date && <p className='copy-small'>{date}</p>}
    </div>
  </Link>
);
