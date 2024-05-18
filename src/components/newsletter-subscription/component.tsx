'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState<string>('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNewsletterSubscriptionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className='newsletter'>
      {/* TODO: Implementar validação de email e envio para o Strapi */}
      {false ? (
        <h4 className='newsletter__thanks'>
          thank you for signing up for the newsletter
        </h4>
      ) : (
        <>
          <div className='newletter__info'>
            <h4>subscribe to our newletter</h4>
            <p className='copy'>Unlock Exclusive Insights and Stay In the Know – Subscribe to Our Newsletter Today to always stay in touch</p>
          </div>
          <form
            className='newsletter__form'
            onSubmit={handleNewsletterSubscriptionSubmit}
          >
            <input
              type='text'
              className='newsletter__email input'
              placeholder='Enter your email address'
              value={email}
              onChange={handleEmailChange} />
            <button
              type='submit'
              className='newsletter__subscribe btn btn--medium btn--turquoise'
            >
              SUBSCRIBE
            </button>
          </form>
        </>
      )}
    </section>
  );
};
