/* eslint-disable */
import { FormEvent } from 'react';

interface Props {
  labelText?: string;
  name?: string;
  typeInput?: string;
  error?: string;
  placeHolder?: string;
  onBlur?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string | number;
}

function InputForm({
  labelText,
  name,
  typeInput = 'text',
  error,
  placeHolder,
  onBlur,
  onChange,
  onFocus,
  value
}: Props) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="inline-block mb-2 text-gray-700">
        {labelText}
      </label>
      <input
        type={typeInput}
        className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
         text-gray-700
        bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        name={name}
        aria-describedby={`${name}Help`}
        placeholder={placeHolder || ''}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        data-slash-to-focus="true"
        value={value}
      />
      <small id={`${name}Help`} className="block mt-1 text-xs text-red-600">
        {error}
      </small>
    </div>
  );
}

export default InputForm;
