'use client';
import React from 'react';
import { PokemonCard } from '../Card/ card';
import { useFormState } from 'react-dom';
import { getPokemon } from '@/services/client/get-pokemon';
import { FormInput } from '../Form';
import { ContainerWrapper } from '../Container';

export function FormPage() {
  const [state, formAction] = useFormState(getPokemon, {
    data: null,
    message: null,
  });
  const { data, message } = state;

  return (
    <ContainerWrapper>
      <form action={formAction} className='flex flex-col gap-4'>
        <FormInput />
        {!data && message === 'not found' && (
          <p className='text-center'>Pokemon not found</p>
        )}
        {data && !message?.length && (
          <PokemonCard
            descriptions={[
              {
                property: 'HP',
                value: data.stats[0].base_stat,
              },
              {
                property: 'Attack',
                value: data.stats[1].base_stat,
              },
              {
                property: 'Defense',
                value: data.stats[2].base_stat,
              },
              {
                property: 'Speed',
                value: data.stats[5].base_stat,
              },
              {
                property: 'SP. defense',
                value: data.stats[4].base_stat,
              },
              {
                property: 'Sp. Attack',
                value: data.stats[3].base_stat,
              },
            ]}
            id={data.id}
            img={data.sprites.other['official-artwork'].front_default}
            name={data.name}
          />
        )}
      </form>
    </ContainerWrapper>
  );
}
