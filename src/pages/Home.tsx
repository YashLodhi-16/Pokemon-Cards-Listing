import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoaderData } from "react-router";
import { TPokemon } from "@/schemas/pokemon.zod";

interface Data {
  pokemons: TPokemon | TPokemon[];
}

const Home = () => {
  const loaderData = useLoaderData<Data>();

  console.log(loaderData, "hello from loader");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="bulbasuar" />
        <Button className="cursor-pointer">Search</Button>
      </div>
    </div>
  );
};

export default Home;
