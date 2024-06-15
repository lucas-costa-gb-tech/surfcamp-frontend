import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { getBlogArticles, getBlogArticle } from '@/services/blog-articles';

import type { BlogArticleProps } from './types';

export const generateStaticParams = async () => {
  const { data: blogArticles } = await getBlogArticles();
 
  return blogArticles.map(({ id }) => ({ id: String(id) }));
};

const BlogArticle = async ({ params }: BlogArticleProps) => {
  const { data: blogArticle } = await getBlogArticle(params.id);

  return (
    <main>
      <h1>{blogArticle.attributes.title}</h1>
      <BlocksRenderer content={blogArticle.attributes.content} />
    </main>
  );
};

export default BlogArticle;
