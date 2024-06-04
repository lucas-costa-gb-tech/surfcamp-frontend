import { getBlogArticles } from '@/services/blog-articles';

import type { BlogArticleProps } from './types';

export const generateStaticParams = async () => {
  const { data: blogArticles } = await getBlogArticles();
 
  return blogArticles.map(({ attributes }) => ({
    slug: attributes.slug,
  }))
};

const BlogArticle = ({ params }: BlogArticleProps) => (
  <main>
    <h1>{params.slug}</h1>
  </main>
);

export default BlogArticle;
