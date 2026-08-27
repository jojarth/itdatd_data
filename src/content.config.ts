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

const armors = defineCollection({
  schema: z.object({
    datatype: z.literal("armor"),
    title: z.string(),
    ac: z.number(),
    epEquipped: z.union([z.number(), z.string()]),
    epPacked: z.union([z.number(), z.string()]),
    cost: z.string(),
  }),
  loader: glob({
    base: "./src/content/data/armordata/armorlist",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

const encumbranceSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("fixed"),
    value: z.number(),
  }),
  z.object({
    type: z.literal("bundle"),
    quantity: z.number().int().positive(),
  }),
  z.object({
    type: z.literal("states"),
    values: z.record(z.string(), z.union([z.number(), z.string()])),
  }),
  z.object({
    type: z.literal("assumed"),
  }),
]);

const shields = defineCollection({
  schema: z.object({
    datatype: z.literal("shield"),
    title: z.string(),
    category: z.enum(["Buckler", "Small Shield", "Medium Shield", "Body Shield"]),
    material: z.enum(["Wood", "Reinforced", "Metal"]),
    cost: z.string(),
    encumbrance: encumbranceSchema,
    acBonus: z.number(),
    blockValue: z.number(),
    breakDie: z.string(),
    breakChance: z.number(),
    checkPenalty: z.number(),
  }),
  loader: glob({
    base: "./src/content/data/shielddata/shield_list",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

const items = defineCollection({
  schema: z.object({
    datatype: z.literal("item"),
    title: z.string(),
    category: z.enum([
      "Ammunition",
      "Containers",
      "Exploration Gear",
      "Food and Drink",
      "Light Sources",
      "Religious Gear",
      "Spellcasting Gear",
      "Tools",
      "Restraints",
      "Mount and Transport Gear",
      "Miscellaneous",
    ]),
    cost: z.string(),
    encumbrance: encumbranceSchema,
    consumable: z.boolean().optional(),
    notes: z.string().optional(),
    sortOrder: z.number().optional(),
  }),
  loader: glob({
    base: "./src/content/data/itemdata/item_list",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

const keywordFeatures = defineCollection({
  schema: z.object({
    datatype: z.literal("keyword_feature"),
    title: z.string(),
    shortDescription: z.string(),
    keywords: z.array(z.string()).min(1),
    otherPrerequisites: z.string().optional(),
  }),
  loader: glob({
    base: "./src/content/data/keywordfeaturedata/keyword_features",
    pattern: "**/*.mdx",
    generateId: preserveMdxId,
  }),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        spellcasting: z.object({
          type: z.enum(["Clerical", "Magical"]),
          method: z.enum(["Free-Hand", "Sacred"]),
        }).optional(),
        classSummary: z.object({
          role: z.string(),
          armor: z.string(),
        }).optional(),
      }),
    }),
  }),
  data,
  weaponFeatures,
  weaponProperties,
  weapons,
  armors,
  shields,
  items,
  keywordFeatures,
};
