'use client';
import React from 'react';
import { SubmitFormButton } from './button';

export function FormInput() {
  return (
    <div className='flex flex-row gap-1 '>
      <label className='sr-only'>Search</label>
      <div className='relative w-full'>
        <input
          type='text'
          id='simple-search'
          name='pokemon'
          className='bg-gray-50 border border-gray-300 text-gray-900 lowercase text-sm rounded-lg focus:border-white-500 block 
          w-full ps-5 p-2.5'
          placeholder='Search Pokémon'
          required
        />
      </div>
      <SubmitFormButton />
    </div>
  );
}
