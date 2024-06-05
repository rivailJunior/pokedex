'use client';

import React from 'react';
import { ContainerWrapper } from '../Container';
import { SubmitFormButton } from './button';

type FormInputProps = {
  formAction: (payload: FormData) => void;
};

export function FormInput({ formAction }: FormInputProps) {
  return (
    <ContainerWrapper>
      <form className='flex' action={formAction}>
        <label className='sr-only'>Search</label>
        <div className='relative w-full'>
          <input
            type='text'
            id='simple-search'
            name='pokemon'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Search Pokémon'
            required
          />
        </div>
        <SubmitFormButton />
      </form>
    </ContainerWrapper>
  );
}
