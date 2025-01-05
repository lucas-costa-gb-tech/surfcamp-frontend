import { CardList } from '@/components/card-list';
import { Card } from '@/components/card';
import { Header } from '@/components/header';
import { getEvents } from '@/services/events';

const Events = async () => {
  const { data: events } = await getEvents();

  return (
    <>
      <Header baseColor='black' />
      <main className='events-page'>
        <CardList title='Upcomings events'>
        {events.map(({ id, attributes }) => (
          <Card
            key={id}
            id={id}
            destineRoute='events'
            title={attributes.name}
            imageSource={`${process.env.STRAPI_API}${attributes.image.data.attributes.url}`}
          />
        ))}
      </CardList>
      </main>
    </>
  );
};

export default Events;
