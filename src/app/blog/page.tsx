import { FeaturedArticle } from '@/components/featured-article';
import { NewsletterSubscription } from '@/components/newsletter-subscription';
import { CardList, type CardItem } from '@/components/card-list';

const latestArticles: Array<CardItem> = [
  {
    id: '1',
    title: 'surfboard shaping and design behind the scenes of crafting the perfect board',
    date: 'Monday, June 05, 2023',
    imageSource: '/article-1.webp',
  },
];

const Blog = () => (
  <>
    <main className='blog-page'>
      <FeaturedArticle />
      <NewsletterSubscription />
      <CardList title='Our lastest articles' items={latestArticles} />
    </main>
  </>
);

export default Blog;
