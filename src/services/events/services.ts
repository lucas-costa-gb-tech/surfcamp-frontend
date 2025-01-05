import type { GetEventsResponse, GetEventResponse } from './types';

export const getEvents = async () => {
  const response = await fetch(`${process.env.STRAPI_API}/api/events?populate=image`, {
    method: 'GET'
  });

  return response.json() as Promise<GetEventsResponse>;
};

export const getEvent = async (id: string) => {
  const response = await fetch(`${process.env.STRAPI_API}/api/events/${id}?populate=image`, {
    method: 'GET'
  });

  return response.json() as Promise<GetEventResponse>;
};
