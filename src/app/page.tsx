import { PokemonCard } from '@/components/Card/ card';
import { FormInput } from '@/components/Form';

const getPokemon = async () => {
  const data = await fetch('http://localhost:3000/api/');
  return await data.json();
};

export default async function Home() {
  const { data } = await getPokemon();
  return (
    <main className='flex min-h-screen align-middle justify-center'>
      <div className='container mt-16 bg-gray-100 dark:bg-gray-900 p-3'>
        <div className='flex flex-col gap-4 items-center'>
          <FormInput />
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
        </div>
      </div>
    </main>
  );
}
