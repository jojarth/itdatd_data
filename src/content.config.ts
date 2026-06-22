import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const data = defineCollection({
  schema: z.object({
    datatype: z.literal("spell"),
    title: z.string(),
    level: z.number(),
    actioncost: z.string().optional(),
    castspeed: z.number().optional(),
    range: z.string().optional(),
    duration: z.string().optional(),
    classes: z.array(z.string()).optional(),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  data,
};