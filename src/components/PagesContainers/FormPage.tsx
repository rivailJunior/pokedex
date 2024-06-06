'use client';
import React from 'react';
import { PokemonCard } from '../Card/ card';
import { useFormState } from 'react-dom';
import { getPokemon } from '@/services/client/get-pokemon';
import { FormInput } from '../Form';

export function FormPage() {
  const [state, formAction] = useFormState(getPokemon, { data: null });
  console.log('state:', state)
  const { data } = state;
  return (
    <>
      <FormInput formAction={formAction} />
      {data && (
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
    </>
  );
}
