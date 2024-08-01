import type { GetInfoBlocksResponse} from './types';

export const getInfoBlocks = async () => {
  const response = await fetch(`${process.env.STRAPI_API}/api/info-blocks?populate=image`, {
    method: 'GET'
  });

  return response.json() as Promise<GetInfoBlocksResponse>;
};
