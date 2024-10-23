import { Pokemon } from "../types";

export const GetPokemons = async () => {
  return await fetch(import.meta.env.VITE_POKEMONS_API, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error("Error to get the data");
      return res.json();
    })
    .then((data) => {
      const pokemons = data.results.map((x: Pokemon) => {
        return {
          ...x,
          id: crypto.randomUUID(),
        };
      });
      const uniquePokemons = pokemons.filter(
        (x: Pokemon, index: number, self: Pokemon[]) =>
          index === self.findIndex((t) => t.national_number === x.national_number)
      );
      return uniquePokemons;
    })
    .catch((err) => console.log(err));
};

export const GetPokemon = async (name: string | undefined) => {
  return await fetch(`${import.meta.env.VITE_POKEMON_API}/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Error to get the data");
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};
