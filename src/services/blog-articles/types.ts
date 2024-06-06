import type { BlocksContent } from '@strapi/blocks-react-renderer';

export type BlogArticleAttributes = {
  title: string;
  slug: string;
  author: string;
  date: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  content: BlocksContent,
};

export type BlogArticleData = {
  id: number;
  attributes: BlogArticleAttributes;
}

export type GetBlogArticles = {
  data: Array<BlogArticleData>;
};

export type GetBlogArticle = {
  data: BlogArticleData;
};
