import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function PokemonByType() {
  const [type, setType] = useState();
  const { pokemonType } = useParams();

  const hasPokemons = type?.pokemon.length > 0;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`)
      .then((response) => response.json())
      .then((data) => setType(data));
  }, [pokemonType]);

  return (
    <>
      <h1 className="text-4xl capitalize">{pokemonType}</h1>
      <div className="flex justify-center">
        <img src={type?.sprites["generation-iii"].colosseum.name_icon} alt="" />
      </div>
      {hasPokemons &&
        type?.pokemon.map((pokemon) => (
          <>
            <Link to={`/pokemon/${pokemon.pokemon.name}`}>
              <li key={pokemon.pokemon.name} className="cursor-pointer">
                {pokemon.pokemon.name}
              </li>
            </Link>
          </>
        ))}
    </>
  );
}
