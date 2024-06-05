export async function POST(request: Request) {
  const formData = await request.json();

  const data = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + formData.pokemon
  ).then((res) => res.json());
  return Response.json({ data }, { status: 200 });
}
