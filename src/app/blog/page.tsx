import { FeaturedArticle } from '@/components/featured-article';
import { NewsletterSubscription } from '@/components/newsletter-subscription';

const Blog = () => {
  return (
    <>
      <main className='blog-page'>
        <FeaturedArticle />
        <NewsletterSubscription />
      </main>
    </>
  );
};

export default Blog;
