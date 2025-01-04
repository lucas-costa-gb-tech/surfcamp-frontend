import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import { Header } from '@/components/header';
import { SignupForm } from '@/components/signup-form';
import { getEvents, getEvent } from '@/services/events';

import type { EventDetailsProps } from './types';

export const generateStaticParams = async () => {
  const { data: events } = await getEvents();
 
  return events.map(({ id }) => ({ id: String(id) }));
};

const EventDetails = async ({ params }: EventDetailsProps) => {
  const { data: event } = await getEvent(params.id);

  return (
    <>
      <Header baseColor='black' />
      <main className='events-page'>
        <SignupForm
          eventId={params.id}
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

export default EventDetails;
