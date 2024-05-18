import Image from 'next/image';

export const FeaturedArticle = () => (
  <article className='featured-article'>
    <div className='featured-article__info'>
      <h3>3 tips for a super fast takeoff</h3>
      <p className='copy'>Improving your take-off phase in surfing is a fundamental step toward riding waves with more confidence and style. Improving your take-off phase is a gradual process, and it may take time to master. Be patient, stay committed to practice, and enjoy the journey of becoming a better surfer. With dedication and persistence, you&apos;ll see progress and have more enjoyable rides. Here is how:</p>
      <button type='button' className='btn btn--turquoise btn--small'>Read more</button>
    </div>
    <Image
      className='featured-article__image'
      src='/article-1.webp'
      alt='Article image'
      width={660}
      height={440}
      priority
    />
  </article>
);
