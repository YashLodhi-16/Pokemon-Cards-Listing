import { TPokemon } from "@/schemas/pokemon.zod";
import Cries from "./Cries";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Pokemon from "./Pokemon";

const PokemonBaseCard = ({ pokemon }: { pokemon: TPokemon }) => {
  const openModel = () => {
    console.log("model");
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className="cursor-pointer border rounded-lg border-solid border-amber-300 hover:shadow-md hover:dark:shadow-yellow-500 hover:shadow-yellow-200 transition-all duration-300 ease-in-out px-2 py-2 pb-4 text-center text-sm sm:text-base justify-between items-center group flex flex-col"
          onClick={openModel}
        >
          <div className="mb-2 img-parent">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              className="w-4/5 max-w-48 mx-auto img-child group-hover:drop-shadow-gray-500 dark:group-hover:drop-shadow-gray-300 group-hover:rotate-y-180 group-hover:drop-shadow"
            />
            <h3 className="uppercase font-semibold">{pokemon.name}</h3>
          </div>

          <div className="mb-3">
            <p>
              Height: {pokemon.height / 10} <span>(m)</span>
            </p>
            <p>
              Weight: {pokemon.weight / 10} <span>(kg)</span>
            </p>
            <p>Species: {pokemon.species.name}</p>
          </div>

          <Cries pokemon={pokemon} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <Pokemon pokemon={pokemon} />
      </DialogContent>
    </Dialog>
  );
};

export default PokemonBaseCard;
