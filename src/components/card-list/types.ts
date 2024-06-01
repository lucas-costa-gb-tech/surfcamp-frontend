import type { BlogArticleData } from '@/services/blog-articles';

export type CardListProps = {
  title: string;
  items: Array<BlogArticleData>;
};
