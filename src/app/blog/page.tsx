import { FeaturedArticle } from '@/components/featured-article';
import { NewsletterSubscription } from '@/components/newsletter-subscription';
import { CardList } from '@/components/card-list';
import { Card } from '@/components/card';
import { getBlogArticles } from '@/services/blog-articles';

const Blog = async () => {
  const { data: blogArticles } = await getBlogArticles();

  return (
    <>
      <main className='blog-page'>
        <FeaturedArticle />
        <NewsletterSubscription />
        <CardList title='Our lastest articles'>
          {blogArticles.map(({ id, attributes }) => (
            <Card
              key={id}
              title={attributes.title}
              date={new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(new Date(attributes.date))}
              imageSource={`${process.env.STRAPI_API}${attributes.image.data.attributes.url}`}
            />
          ))}
        </CardList>
      </main>
    </>
  );
};

export default Blog;
