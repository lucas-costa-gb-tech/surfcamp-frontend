import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Header } from '@/components/header';
import { SignupForm } from '@/components/signup-form';
import { getEvent } from '@/services/events';

const Events = async () => {
  const { data: event } = await getEvent('1');

  return (
    <>
      <Header baseColor='black' />
      <main className='events-page'>
        <SignupForm
          eventId='1'
          headline={event.attributes.name}
          content={<BlocksRenderer content={event.attributes.description} />}
          pricing={{
            single: event.attributes.singlePrice,
            shared: event.attributes.sharedPrice,
          }}
        />
      </main>
    </>
  );
};

export default Events;
