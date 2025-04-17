import { z } from "zod";

export const homeRoute = "/";
export const aboutRoute = "about";

export const { VITE_POKEMON_API } = import.meta.env;
z.string().trim().nonempty().url().parse(VITE_POKEMON_API);
