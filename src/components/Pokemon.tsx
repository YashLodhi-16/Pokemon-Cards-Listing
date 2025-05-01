import { TPokemon } from "@/schemas/pokemon.zod";
// import pokeball from "@/assets/images/pokeball.png";

// const PokemonBgTxt = () => {
//   const baseClass =
//     "font-pk-solid text-2xl text-yellow-400 text-shadow-outline font-bold";
//   return (
//     <div className={`flex gap-x-0.5`}>
//       <p className={`${baseClass} -rotate-10 -translate-x-1.5 translate-y-1.5`}>
//         p
//       </p>
//       <p className={`${baseClass} -rotate-[8deg] -translate-x-1 translate-y-1`}>
//         o
//       </p>
//       <p
//         className={`${baseClass} -rotate-[4deg] -translate-x-0.5 translate-y-0.5`}
//       >
//         k
//       </p>
//       <p className={baseClass}>e</p>
//       <p className={`${baseClass} rotate-[4deg] translate-0.5`}>m</p>
//       <p className={`${baseClass} rotate-[8deg] translate-1`}>o</p>
//       <p className={`${baseClass} rotate-12 translate-x-1.5 translate-y-2`}>
//         n
//       </p>
//     </div>
//   );
// };

const Pokemon = ({ pokemon }: { pokemon: TPokemon }) => {
  return (
    <div
      className="min-h-72 rounded-lg overflow-hidden text-sm"
      key={pokemon.id}
    >
      {/* front side  */}
      <div className="flex flex-col gap-y-4 justify-center items-center py-2 border-4 border-yellow-400 border-solid rounded-lg">
        {/* image */}
        <div>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-24"
          />
        </div>
        {/* name */}
        <div>
          <h3 className="uppercase dark:text-cyan-100 text-base">
            {pokemon.name}
          </h3>
        </div>

        {/* abilities */}
        <div>
          {pokemon.abilities.map((ability) => {
            return (
              <div key={ability.slot}>
                <p>name {ability.ability.name}</p>
                <p>is hidden {ability.is_hidden ? "yes" : "no"}</p>
              </div>
            );
          })}
        </div>

        {/* base experience */}
        <div>
          <p>base experience {pokemon.base_experience}</p>
        </div>
        <div className="px-2 w-4/5">
          <div className="leading-1 flex justify-between items-center">
            <div>
              {/* height */}
              <p className="text-sm">{pokemon.height}</p>
            </div>
          </div>

          {/* cries */}
        </div>

        {/* types */}
        <div>
          <h3>types</h3>
          <div>
            {pokemon.types.map((type) => {
              return <p key={type.slot}>{type.type.name}</p>;
            })}
          </div>
        </div>

        {/* weight */}
        <div>
          <h3>weight</h3>
          <p>{(pokemon.weight * 100) / 1000} kg</p>
        </div>

        {/* stats */}
        <div>
          <h3>stats</h3>
          <div>
            {pokemon.stats.map((stat) => {
              return (
                <div key={stat.effort}>
                  <h4>{stat.base_stat}</h4>
                  <h5>name {stat.stat.name}</h5>
                </div>
              );
            })}
          </div>
        </div>

        {/* held items */}
        <div>
          {pokemon.held_items[0] &&
            pokemon.held_items.map((heldItem) => {
              return <p key={heldItem.item.name}>{heldItem.item.name}</p>;
            })}
        </div>
      </div>
      {/* <div
        className={`flex justify-center items-center h-full relative overflow-hidden before:content-[] before:w-[200%] before:h-[200%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[url("/src/assets/images/clouds.jpg")] before:bg-center before:bg-no-repeat before:bg-cover before:rotate-90 before:absolute before:-z-10`}
      >
        <div>
          <PokemonBgTxt />
          <img src={pokeball} alt="pokeball" className="w-16" />
        </div>
      </div> */}
    </div>
  );
};

export default Pokemon;
