import type { BlocksContent } from '@strapi/blocks-react-renderer';

export type EventAttributes = {
  name: string;
  description: BlocksContent;
  startingDate: string;
  endingDate: string;
  singlePrice: number;
  sharedPrice: number;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type EventData = {
  id: number;
  attributes: EventAttributes;
};

export type GetEventsResponse = {
  data: Array<EventData>;
};

export type GetEventResponse = {
  data: EventData;
};
