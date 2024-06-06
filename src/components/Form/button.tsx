'use client';
import { useFormStatus } from 'react-dom';

export function SubmitFormButton() {
  const { pending } = useFormStatus();
  const btnClass = pending && ' opacity-30 cursor-not-allowed';
  return (
    <button
      disabled={pending}
      type='submit'
      className={
        'p-2.5 ms-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none ' +
        btnClass
      }
    >
      <svg
        className='w-4 h-4'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 20 20'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
        />
      </svg>
      <span className='sr-only'>Search</span>
    </button>
  );
}
