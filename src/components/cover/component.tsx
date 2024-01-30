import Image from 'next/image';
import Link from 'next/link';

import type { CoverProps } from './types';

export const Cover = ({ baseColor, imageSource, headlines }: CoverProps) => (
  <section className='hero'>
    <div className='hero__background'>
      <Image
        src={imageSource}
        alt='Cover image'
        width={1440}
        height={829}
        priority
      />
    </div>
    <div className={`hero__headline hero__headline--${baseColor}`}>
      {headlines.map((headline) => <h1 key={headline}>{headline}</h1>)}
    </div>
    <button type='button' className={`btn btn--medium btn--${baseColor}`}>
     <Link href='/events'>BOOK NOW</Link>
    </button>
    <Image
      className={`hero__logo hero__logo--${baseColor}`}
      src='/logo.svg'
      alt='Surf Camp logo'
      width={120}
      height={190}
      priority
    />
  </section>
);
