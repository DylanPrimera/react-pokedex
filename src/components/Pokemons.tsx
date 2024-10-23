import { useMemo, useState } from "react";
import { Pokemon } from "../types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";
import "../styles/Pokemons.css";

interface Props {
  pokemons: Pokemon[];
}

const PokemonsList = ({ pokemons }: Props) => {
  return (
    <div>
      {pokemons.length === 0 && <span>Loading...</span>}
      <nav>
        {pokemons.length !== 0 &&
          pokemons?.map((pokemon) => (
            <Link
              className="listItem"
              to={`/pokemon/${pokemon.name.toLocaleLowerCase()}`}
              key={pokemon.id}
            >
              <img
                className="listItemIcon"
                src={pokemon.sprites.animated}
                alt={`${pokemon.name} animated`}
              />
              <div className="listItemText">
                <span>{pokemon.name}</span>
                <span>{pokemon.national_number}</span>
              </div>
            </Link>
          ))}
      </nav>
    </div>
  );
};

export const Pokemons = ({ pokemons }: Props) => {
  const [query, setQuery] = useState("");
  const pokemonsFiltered = useMemo(() => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    return filteredPokemons ?? pokemons;
  }, [pokemons, query]);
  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <h1>Pokemons</h1>
        <PokemonsList pokemons={pokemonsFiltered} />
      </main>
      <Footer />
    </>
  );
};
