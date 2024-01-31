import { Header } from '@/components/header';
import { Cover } from '@/components/cover';
import { InfoBlock } from '@/components/info-block';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Cover
          baseColor='turquoise'
          imageSource='/cover-1.webp'
          headlines={['barrel.', 'your.', 'happiness.']}
        />
        <InfoBlock
          baseColor='orange'
          isReversed={false}
          imageSource='/info-1.webp'
          headline='the experience.'
          text='At Surf Camp, we invite you to embark on an unforgettable surfing adventure. Nestled in the heart of [Location] our surf camp offers an exhilarating experience for beginners, intermediate surfers, and seasoned wave riders alike.'
        />
      </main>
      <Footer />
    </>
  );
}
