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
      <p className='copy'>{text}</p>
      <button type='button' className={`btn btn--${baseColor} btn--small`}>BOOK NOW</button>
    </div>
  </div>
);
