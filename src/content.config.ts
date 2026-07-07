import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const data = defineCollection({
  schema: z.object({
    datatype: z.literal("spell"),
    title: z.string(),
    level: z.number(),
    school: z.string().optional(),
    actioncost: z.string().optional(),
    castspeed: z.number().optional(),
    range: z.string().optional(),
    duration: z.string().optional(),
    classes: z.array(z.string()).optional(),
    shortDescription: z.string().optional(),
    excerpt: z.string().optional(),
  }),
  loader: glob({
    pattern: "src/content/data/spelldata/spell_list/**/[^_]*.{md,mdx}",
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  data,
};