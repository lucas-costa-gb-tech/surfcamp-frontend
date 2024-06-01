import { Card } from '@/components/card';

import type { CardListProps } from './types';

export const CardList = ({ title, children }: CardListProps) => (
  <section className='featured-items'>
    <h3 className='featured-items__headline'>{title}</h3>
    <div className='featured-items__container'>
      {children}
    </div>
  </section>
);
