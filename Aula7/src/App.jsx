import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const [offset, setOffset] = useState(0);
  const [hasPrevious, setHasPrevious] = useState(false);

  const hasPokemons = pokemons.length > 0;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setHasPrevious(data.previous);
      });
  }, [offset]);

  const fetchSelectedPokemon = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSelectedPokemon(data));
  };

  return (
    <div className="flex items-center flex-col">
      {selectedPokemon && (
        <img
          width={200}
          src={
            selectedPokemon?.sprites?.other["official-artwork"].front_default
          }
        />
      )}
      <ul>
        {!hasPokemons && "Não encontramos nenhum Pokémon!"}
        {hasPokemons &&
          pokemons.map((pokemon) => (
            <li
              key={pokemon.name}
              onClick={() => {
                fetchSelectedPokemon(pokemon.url);
              }}
              className="cursor-pointer"
            >
              {pokemon.name}
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

export default App;
