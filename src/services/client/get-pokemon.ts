import { env } from '@/config/env';
const { LOCAL_API_URL } = env;

export async function getPokemon(state: any, formData: FormData) {
  try {
    const rawData = {
      pokemon: formData.get('pokemon'),
    };
    console.log('LOCAL_API_URL:', LOCAL_API_URL)
    const response = await fetch(LOCAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rawData),
    });
    if (response.status === 200) {
      return await response.json();
    } else {
      return { data: null };
    }
  } catch (err) {
    // TODO: improve it
    console.error('err ==>', err);
  }
}
