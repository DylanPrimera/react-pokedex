import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetPokemon } from "../services/pokedex";
import { PokemonInfo } from "../types";
import "../styles/PokemonDetail.css";

export const PokemonDetail = () => {
  const { name: pokemonName } = useParams();
  const [pokemon, setPokemon] = useState<PokemonInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const getPokemonInfo = async () => {
    const response = await GetPokemon(pokemonName).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
    setPokemon(response);
    setLoading(false);
  };

  useEffect(() => {
    getPokemonInfo();
  }, [pokemonName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    pokemon && (
      <div className="container">
        <h1>{pokemon.name.toUpperCase()}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>Types</h2>
        <ul>
          {pokemon.types?.map((typeObj, index) => (
            <li key={index}>{typeObj.type.name}</li>
          ))}
        </ul>

        <h2>Abilities</h2>
        <ul>
          {pokemon.abilities.map((abilityObj, index) => (
            <li key={index}>{abilityObj.ability.name}</li>
          ))}
        </ul>

        <h2>Base Stats</h2>
        <ul className="stats">
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </li>
          ))}
        </ul>

        <h3>Height: {pokemon.height / 10} m</h3>
        <h3>Weight: {pokemon.weight / 10} kg</h3>
      </div>
    )
  );
};
