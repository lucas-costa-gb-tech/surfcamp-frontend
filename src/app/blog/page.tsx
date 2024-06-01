import { FeaturedArticle } from '@/components/featured-article';
import { NewsletterSubscription } from '@/components/newsletter-subscription';
import { CardList } from '@/components/card-list';
import { getBlogArticles } from '@/services/blog-articles';

const Blog = async () => {
  const { data: blogArticles } = await getBlogArticles();

  return (
    <>
      <main className='blog-page'>
        <FeaturedArticle />
        <NewsletterSubscription />
        <CardList title='Our lastest articles' items={blogArticles} />
      </main>
    </>
  );
};

export default Blog;
