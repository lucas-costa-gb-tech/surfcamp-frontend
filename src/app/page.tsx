import { Header } from '@/components/header';
import { Cover } from '@/components/cover';
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
      </main>
      <Footer />
    </>
  );
}
