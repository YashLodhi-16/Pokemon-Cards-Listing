import { z } from "zod";

export const zPokemon = z.object({
  abilities: z
    .object({
      ability: z.object({
        name: z.string().trim().nonempty(),
      }),
      is_hidden: z.boolean(),
      slot: z.number().int().nonnegative(),
    })
    .array()
    .nonempty(),
  base_experience: z.number().int().nonnegative(),
  cries: z.object({
    latest: z.string().trim().url(),
    legacy: z.string().trim().url(),
  }),
  height: z.number().int().nonnegative(),
  held_items: z.union([
    z
      .object({
        item: z.object({
          name: z.string().trim().nonempty(),
          url: z.string().trim().url(),
        }),
      })
      .array(),
    z.tuple([]),
  ]),
  id: z.number().int().nonnegative(),
  moves: z
    .object({
      move: z.object({
        name: z.string().trim().nonempty(),
      }),
    })
    .array(),
  name: z.string().trim().nonempty(),
  species: z.object({
    name: z.string().trim().nonempty(),
  }),
  sprites: z.object({
    other: z.object({
      "official-artwork": z.object({
        front_default: z.string().trim().url(),
        front_shiny: z.string().trim().url(),
      }),
    }),
  }),
  stats: z
    .object({
      base_stat: z.number().int().nonnegative(),
      effort: z.number().int().nonnegative(),
      stat: z.object({
        name: z.string().trim().nonempty(),
      }),
    })
    .array()
    .nonempty(),
  types: z
    .object({
      slot: z.number().int().nonnegative(),
      type: z.object({
        name: z.string().trim().nonempty(),
      }),
    })
    .array(),
  weight: z.number().int().nonnegative(),
});

export type TPokemon = z.infer<typeof zPokemon>;
