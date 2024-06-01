import { Card } from '@/components/card';

import type { CardListProps } from './types';

export const CardList = ({ title, items }: CardListProps) => (
  <section className='featured-items'>
    <h3 className='featured-items__headline'>{title}</h3>
    <div className='featured-items__container'>
      {items.map(({ id, attributes }) => (
        <Card key={id} {...attributes} />
      ))}
    </div>
  </section>
);
