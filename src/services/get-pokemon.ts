export async function getPokemon(state: any, formData: FormData) {
  try {
    const rawData = {
      pokemon: formData.get('pokemon'),
    };
    const response = await fetch('http://localhost:3000/api/', {
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
