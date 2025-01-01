import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Header } from '@/components/header';
import { getEvent } from '@/services/events';

import { SignupForm } from '@/components/signup-form';

const Events = async () => {
  const { data: event } = await getEvent('1');

  return (
    <>
      <Header baseColor='black' />
      <main className='events-page'>
        <SignupForm
          headline={event.attributes.name}
          content={<BlocksRenderer content={event.attributes.description} />}
        />
      </main>
    </>
  );
};

export default Events;
