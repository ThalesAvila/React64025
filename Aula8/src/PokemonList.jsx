import { useEffect, useState } from "react";
import "./PokemonList.css";
import { Link, useSearchParams } from "react-router-dom";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const [hasPrevious, setHasPrevious] = useState(false);
  const [searchParams] = useSearchParams();

  const hasPokemons = pokemons.length > 0;

  useEffect(() => {
    if (searchParams.get("limit")) {
      setLimit(Number(searchParams.get("limit")));
    }

    if (searchParams.get("offset")) {
      setOffset(Number(searchParams.get("offset")));
    }

    console.log(limit, offset);
  }, [searchParams]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setHasPrevious(data.previous);
      });
  }, [offset]);

  return (
    <div className="flex items-center flex-col">
      <ul>
        {!hasPokemons && "Não encontramos nenhum Pokémon!"}
        {hasPokemons &&
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
            </li>
          ))}
      </ul>
      <div>
        <button
          disabled={!hasPrevious}
          onClick={() => {
            setOffset(offset - 10);
          }}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setOffset(offset + 10);
          }}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
