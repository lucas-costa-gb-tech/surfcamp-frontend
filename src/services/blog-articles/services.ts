import type { GetBlogArticles, GetBlogArticle } from './types';

export const getBlogArticles = async () => {
  const response = await fetch(`${process.env.STRAPI_API}/api/blog-articles?populate=image`, {
    method: 'GET'
  });
  return response.json() as Promise<GetBlogArticles>;
};

export const getBlogArticle = async (id: string) => {
  const response = await fetch(`${process.env.STRAPI_API}/api/blog-articles/${id}?populate=image`, {
    method: 'GET'
  });
  return response.json() as Promise<GetBlogArticle>;
};
