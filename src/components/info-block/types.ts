import { type BlocksContent } from '@strapi/blocks-react-renderer';

export type InfoBlockProps = Readonly<{
  baseColor: string;
  isReversed: boolean;
  imageSource: string;
  headline: string;
  text: BlocksContent;
}>;
