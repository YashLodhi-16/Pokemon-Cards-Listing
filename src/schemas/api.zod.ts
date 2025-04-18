import { z } from "zod";

export const zAPI = z
  .object({
    count: z.number().int().nonnegative(),
    next: z.union([z.null(), z.string().trim().url()]),
    previous: z.union([z.null(), z.string().trim().url()]),
    results: z.union([
      z
        .object({
          name: z.string().trim().nonempty(),
          url: z.string().trim().url(),
        })
        .array(),
      z.tuple([]),
    ]),
  })
  .superRefine((api, ctx) => {
    if (!api.next && !api.previous) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Next url and Previous url both cannot be null",
        path: ["next", "previous"],
        fatal: true,
      });
      return z.NEVER;
    }

    if (api.previous) {
      const previousUrl = new URL(api.previous);
      const limitStr = previousUrl.searchParams.get("limit");
      const offsetStr = previousUrl.searchParams.get("offset");

      if (!limitStr || !offsetStr) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid Previous url",
          path: ["previous"],
          fatal: true,
        });
        return z.NEVER;
      }
      const limit = parseInt(limitStr);
      const offset = parseInt(offsetStr);

      const total = limit + offset;

      if (total === api.count && api.results.length !== 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Counter limit is full, results should be empty but detected not empty",
          path: ["previous", "results"],
        });

        if (api.next) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message:
              "Counter limit is full so the next url should be null but found not null",
            path: ["next"],
          });
        }
      }
    }
    return z.NEVER;
  });
export type TAPI = z.infer<typeof zAPI>;
