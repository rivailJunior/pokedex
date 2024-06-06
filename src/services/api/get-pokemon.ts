import { env } from '@/config/env';
const { POKEMON_API_URL } = env;
export async function getPokemon(pokemon: string) {
    return await fetch(
        `${POKEMON_API_URL}/${pokemon}` 
      ).then((res) => res.json());
}