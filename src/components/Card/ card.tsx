import Image from 'next/image';
import React from 'react';
import { ContainerWrapper } from '../Container';

type PokemonCardProps = {
  id: string;
  name: string;
  img: string;
  descriptions: { property: string; value: string }[];
};
export function PokemonCard({ name, img, descriptions, id }: PokemonCardProps) {
  return (
    <ContainerWrapper>
      <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
        <Image
          className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
          src={img}
          alt=''
          width={500}
          height={500}
        />
        <div className='flex flex-col justify-between p-4 leading-normal'>
          <h5 className='mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white'>
            <strong>#{id}</strong> {name}
          </h5>
          <div className='grid grid-cols-2 gap-6'>
            {descriptions?.map((item) => {
              return (
                <div key={item.property + item.value}>
                  <strong>{item.property}</strong> <span>{item.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
