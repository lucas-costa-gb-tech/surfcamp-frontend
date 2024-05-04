import { type BlocksContent } from '@strapi/blocks-react-renderer';

export type InfoBlockAttributes = {
  baseColor: string;
  headline: string;
  text: BlocksContent;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
};

export type InfoBlockData = {
  id: number;
  attributes: InfoBlockAttributes;
};

export type GetInfoBlocksResponse = {
  data: Array<InfoBlockData>;
};
