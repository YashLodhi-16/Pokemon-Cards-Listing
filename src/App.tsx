import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "./components/Layout";
import axios from "axios";
import { TAPI, zAPI } from "@/schemas/api.zod";
import { TPokemon, zPokemon } from "@/schemas/pokemon.zod";
import { VITE_POKEMON_API } from "./constants";
import { z } from "zod";
import ErrorBoundaryRR from "@/components/ErrorBoundaryRR";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const name = url.searchParams.get("name");

          if (name) {
            // check for correct data
            const validateName = z.string().trim().nonempty().toLowerCase();
            const validationResultName = await validateName.safeParseAsync(
              name
            );

            if (!validationResultName.success) {
              throw new Error(validationResultName.error.toString());
            }

            // adding the name to the api
            const api = VITE_POKEMON_API + `/` + validationResultName.data;
            const res = (await axios.get<TPokemon>(api)).data;

            // validate the response
            const validateResultPokemon = await zPokemon.safeParseAsync(res);
            if (!validateResultPokemon.success) {
              throw new Error(validateResultPokemon.error.toString());
            }

            // sending to the component
            return { pokemons: validateResultPokemon.data };
          } else {
            // get the page search param, if empty then assgin a default value (1)
            const pageStr = url.searchParams.get("page");
            const page = pageStr ? parseInt(pageStr) : 1;

            // creating url by URL class to add search params
            const pokemonApi = new URL(VITE_POKEMON_API);
            const pokemonLimitPerPage = 10;
            pokemonApi.searchParams.set(
              "offset",
              page === 1 ? "0" : (page * pokemonLimitPerPage).toString()
            );
            pokemonApi.searchParams.set(
              "limit",
              pokemonLimitPerPage.toString()
            );

            const res = (await axios.get<TAPI>(pokemonApi.toString())).data;

            // validate api response
            const validationResultAPI = await zAPI.safeParseAsync(res);
            if (!validationResultAPI.success) {
              throw new Error(validationResultAPI.error.toString());
            }

            // get all pokemons data
            const promises: Promise<TPokemon>[] = res.results.map((result) =>
              axios.get<TPokemon>(result.url).then((res) => res.data)
            );
            const pokemonDetails = await Promise.all(promises);

            // sending the data to the component
            return { pokemons: pokemonDetails };
          }
        },
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
    errorElement: <ErrorBoundaryRR />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
