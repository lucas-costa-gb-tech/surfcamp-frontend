import { Header } from '@/components/header';
import { Cover } from '@/components/cover';
import { InfoBlock } from '@/components/info-block';
import { Footer } from '@/components/footer';

const Experience = () => (
  <>
    <Header baseColor='white' />
    <main>
      <Cover
        baseColor='orange'
        imageSource='/cover-2.webp'
        headlines={['discover.', 'your.', 'spirit.']} />
      <InfoBlock
        baseColor='orange'
        isReversed={false}
        imageSource='/info-3.webp'
        headline='the location.'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lobortis justo at consequat. Phasellus fermentum est et sem tempor, vel tempor magna pellentesque. Suspendisse vitae mauris vitae eros viverra condimentum ultricies congue tellus. Quisque semper, est in cursus sollicitudin, est turpis consectetur turpis, non posuere mauris velit in nisi. Proin dolor orci, egestas nec enim in, faucibus blandit ante. Duis tempor pellentesque pulvinar. Nam rhoncus, massa eget ultrices pretium, enim risus accumsan mauris, nec faucibus nibh est nec neque. Fusce eu dolor vel ipsum bibendum porta.' />
    </main>
    <Footer />
  </>
);

export default Experience;
