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
};

export type BlogArticleData = {
  id: number;
  attributes: BlogArticleAttributes;
}

export type GetBlogArticles = {
  data: Array<BlogArticleData>;
};
