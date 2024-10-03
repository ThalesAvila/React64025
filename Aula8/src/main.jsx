import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./index.css";
import PokemonList from "./PokemonList.jsx";
import PokemonDetails from "./PokemonDetails.jsx";
import PokemonByType from "./PokemonByType.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
  },
  {
    path: "/pokemon/:pokemonId",
    element: (
      <>
        <PokemonDetails />
      </>
    ),
  },
  {
    path: "/type/:pokemonType",
    element: (
      <>
        <PokemonByType />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
