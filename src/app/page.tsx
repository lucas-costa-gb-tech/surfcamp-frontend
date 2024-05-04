import { Header } from '@/components/header';
import { Cover } from '@/components/cover';
import { InfoBlock } from '@/components/info-block';
import { Footer } from '@/components/footer';
import { getInfoBlocks } from '@/services/content';

const Home = async () => {
  const { data: infoBlocks } = await getInfoBlocks();

  return (
    <>
      <Header baseColor='black' />
      <main>
        <Cover
          baseColor='turquoise'
          imageSource='/cover-1.webp'
          headlines={['barrel.', 'your.', 'happiness.']}
        />
        {infoBlocks.map(({ id, attributes: { baseColor, headline, text, image } }) => (
          <InfoBlock
            key={id}
            baseColor={baseColor}
            isReversed={id % 2 === 0}
            imageSource={`${process.env.STRAPI_API}${image.data.attributes.url}`}
            headline={headline}
            text={text}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default Home;
