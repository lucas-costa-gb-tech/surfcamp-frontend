'use client';

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';

import type { InfoBlockProps } from './types';

export const InfoBlock = ({ baseColor, isReversed, imageSource, headline, text }: InfoBlockProps) => (
  <div className={`info ${isReversed ? 'info--reversed' : ''}`}>
    <Image
      className='info__image'
      src={imageSource}
      alt='Info image'
      width={600}
      height={600}
      priority
    />
    <div className='info__text'>
      <h2 className='info__headline'>{headline}</h2>
      <BlocksRenderer
        content={text}
        blocks={{
          paragraph: ({ children }) => <p className='copy'>{children}</p>,
        }}
      />
      <button type='button' className={`btn btn--${baseColor} btn--small`}>Book now</button>
    </div>
  </div>
);
