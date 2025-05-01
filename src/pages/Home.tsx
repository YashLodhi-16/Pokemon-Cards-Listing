import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoaderData } from "react-router";
import { TPokemon } from "@/schemas/pokemon.zod";
import PokemonBaseCard from "@/components/PokemonBaseCard";

interface Data {
  pokemons: TPokemon | TPokemon[];
}

const Home = () => {
  const { pokemons } = useLoaderData<Data>();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
        <Input type="text" placeholder="bulbasuar" />
        <Button className="cursor-pointer">Search</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 xl:grid-cols-5">
        {Array.isArray(pokemons) ? (
          pokemons.map((pokemon) => {
            return <PokemonBaseCard pokemon={pokemon} key={pokemon.id} />;
          })
        ) : (
          <PokemonBaseCard pokemon={pokemons} />
        )}
      </div>
    </div>
  );
};

export default Home;
