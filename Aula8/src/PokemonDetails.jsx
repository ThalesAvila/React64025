import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PokemonDetails() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokemonId]);

  return (
    <div className="flex items-center flex-col">
      {pokemon && (
        <img
          width={200}
          src={pokemon?.sprites?.other["official-artwork"].front_default}
        />
      )}

      {pokemon?.types.map(({ type }) => (
        <>
          <Link to={`/type/${type.name}`}>{type?.name}</Link>
        </>
      ))}
    </div>
  );
}
