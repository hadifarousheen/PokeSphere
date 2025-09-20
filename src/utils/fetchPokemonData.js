import { FETCH_URL } from "./constants";
export const fetchPokemonData=async() =>{
    const allPokemons = await fetch(FETCH_URL);
    const allPokemonsJson = await allPokemons?.json();
    const completePokemonsData = await Promise.all(
      allPokemonsJson.results?.map((pokemon) => fetch(pokemon.url))
    );
    const completePokemonsDataJson = await Promise.all(
      completePokemonsData?.map((response) => response.json())
    );
    return completePokemonsDataJson;
}
