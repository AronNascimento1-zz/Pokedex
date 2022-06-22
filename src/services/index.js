export const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
