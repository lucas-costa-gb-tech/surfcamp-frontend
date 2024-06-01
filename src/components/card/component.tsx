import Image from 'next/image';

import type { CardProps } from './types';

export const Card = ({ title, date, image }: CardProps) => (
  <div className='featured-items__article'>
    <Image
      className='featured-items__article-img'
      src={`${process.env.STRAPI_API}${image.data.attributes.url}`}
      alt='Article card image'
      width={420}
      height={355}
      priority
    />
    <div className='featured-items__article-text'>
      <h5>{title}</h5>
      {date && <p className='copy-small'>{date}</p>}
    </div>
  </div>
);
