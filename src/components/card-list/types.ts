import type { CardProps } from '@/components/card';

export type CardItem = CardProps & {
  id: string;
};

export type CardListProps = {
  title: string;
  items: Array<CardItem>;
};
