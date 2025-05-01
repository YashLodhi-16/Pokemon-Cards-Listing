import { z } from "zod";

export const HomeRoute = "/";
export const AboutRoute = "about";

export const { VITE_POKEMON_API } = import.meta.env;
z.string().trim().nonempty().url().parse(VITE_POKEMON_API);

export const Favicon =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116560/PokeDex/Images/favicon_csa0sv.png";
export const PokeBall =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116559/PokeDex/Images/pokeball_melvby.png";
export const Krokorok =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116559/PokeDex/Images/krokorok_l1dozo.png";
export const Pikachu =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116559/PokeDex/Images/pikachu_px76bo.png";
export const Scizor =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116561/PokeDex/Images/scizor_dprips.png";
export const Sky =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116560/PokeDex/Images/sky_lhbu9o.jpg";
export const Oshawott =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116559/PokeDex/Images/oshawott_cbup5q.png";
export const Hurricane =
  "https://res.cloudinary.com/dblq992uw/image/upload/v1746116558/PokeDex/Images/hurricane-symbol-tornado-typhoon-white-260nw-1178065981_van6pp.jpg";
