import { getPokemon } from '@/services/api/get-pokemon';

export async function POST(request: Request) {
  const formData = await request.json();
  const data = await getPokemon(formData.pokemon);
  return Response.json({ data }, { status: 200 });
}
