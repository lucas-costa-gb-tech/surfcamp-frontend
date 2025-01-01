import type { TextInputProps } from './types';

export const TextInput = ({ name, value, label, onChange }: TextInputProps) => (
  <div className='input__container'>
    <label htmlFor={name} className='copy'>{label}</label>
    <input
      type='text'
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete='off'
      className='input input__text input--beige' />
  </div>
);
