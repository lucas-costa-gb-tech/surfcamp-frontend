import type { GetBlogArticles } from './types';

export const getBlogArticles = async () => {
  const response = await fetch(`${process.env.STRAPI_API}/api/blog-articles?populate=image`, {
    method: 'GET'
  });
  return response.json() as Promise<GetBlogArticles>;
};
