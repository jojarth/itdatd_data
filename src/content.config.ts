import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const data = defineCollection({
  schema: z.object({
    datatype: z.literal("spell"),
    title: z.string(),
    reverseTitle: z.string().optional(),
    reverseShortDescription: z.string().optional(),
    reverseCasting: z.string().optional(),
    reverseRange: z.string().optional(),
    reverseDuration: z.string().optional(),
    level: z.number(),
    school: z.string().optional(),
    casting: z.string(),
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

const preserveMdxId = ({ entry }: { entry: string }) =>
  entry.replace(/\.mdx?$/, "");

const weaponFeatures = defineCollection({
  schema: z.object({
    datatype: z.literal("weapon_feature"),
    title: z.string(),
    shortDescription: z.string(),
  }),
  loader: glob({
    base: "./src/content/data/weapondata/weapon_features",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

const weaponProperties = defineCollection({
  schema: z.object({
    datatype: z.literal("weapon_property"),
    title: z.string(),
    shortDescription: z.string(),
  }),
  loader: glob({
    base: "./src/content/data/weapondata/weapon_properties",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

const weapons = defineCollection({
  schema: z.object({
    datatype: z.literal("weapon"),
    title: z.string(),
    group: z.string(),
    cost: z.string(),
    ep: z.union([z.number(), z.string()]),
    damage: z.string(),
    speed: z.number(),
    range: z.string(),
    properties: z.array(reference("weaponProperties")),
    proficient: z.array(reference("weaponFeatures")),
    skilled: z.array(reference("weaponFeatures")),
    expert: z.array(reference("weaponFeatures")),
    master: z.array(reference("weaponFeatures")),
    grandmaster: z.array(reference("weaponFeatures")),
  }),
  loader: glob({
    base: "./src/content/data/weapondata/weapon_list",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  data,
  weaponFeatures,
  weaponProperties,
  weapons,
};
