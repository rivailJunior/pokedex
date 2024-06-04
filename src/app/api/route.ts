// import { PokemonClient } from 'pokenode-ts';

export async function GET(request: Request) {
  // const api = new PokemonClient();

  // const data = await api.getPokemonByName('luxray');
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/123').then(
    (res) => res.json()
  );
  return Response.json({ data }, { status: 200 });
}
