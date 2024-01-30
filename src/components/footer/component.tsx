import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@/routes/constants';

import { policies } from './constants';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__top'>
      <Image
        className='footer__logo'
        src='/logo.svg'
        alt='Surf Camp logo'
        width={50}
        height={80}
        priority
      />
      <nav>
        <ul className='footer__links'>
          {routes.map(({ path, label }) => (
            <li key={path}>
              <Link href={path}>
                <h5>{label}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className='footer__policies'>
      <ul className='footer__policies-nav'>
        {policies.map((policy) => (
          <li key={policy}>
            <p className='copy'>{policy}</p>
          </li>
        ))}
      </ul>
      <p className='copy'>© Surf Camp - All rights reserved</p>
    </div>
  </footer>
);
