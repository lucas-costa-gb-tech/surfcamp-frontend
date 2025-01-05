'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';

import { TextInput } from '@/components/text-input';
import { postParticipant } from '@/services/participants';

import type { SignupFormProps } from './types';

export const SignupForm = ({ headline, content, eventId, pricing }: SignupFormProps) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [hasSignup, setHasSignup] = useState<boolean>(false);

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignupFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await postParticipant(firstName, lastName, email, eventId);
    setHasSignup(true);
  };

  return (
    <section className='signup-form'>
      <div className='signup-form__info'>
        <h3 className='signup-form__headline'>{headline}</h3>
        {content}
      </div>
      {hasSignup ? (
        <div className='signup-form__form'>
          <h4>Thank you for signing up!</h4>
        </div>
      ) : (
        <form className='signup-form__form' onSubmit={handleSignupFormSubmit}>
          <div className='signup-form__name-container'>
            <TextInput
              name='firstName'
              value={firstName}
              label='First Name'
              onChange={handleFirstNameChange}
            />
            <TextInput
              name='lastName'
              value={lastName}
              label='Last Name'
              onChange={handleLastNameChange}
            />
          </div>
          <TextInput
            name='email'
            value={email}
            label='Email'
            onChange={handleEmailChange}
          />
          <button type='submit' className='btn btn--medium btn--turquoise'>
            Stay in touch!
          </button>
          <div className='signup-form__pricing'>
            <h3>Pricing</h3>
            <p className='copy'>Single Room: <span className='bold'>${pricing.single} per person</span></p>
            <p className='copy'>Shared Room: <span className='bold'>${pricing.shared} per person</span></p>
          </div>
        </form>
      )}
    </section>
  );
};
