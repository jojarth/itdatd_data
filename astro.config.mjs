// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import remarkGameplayCardToc from "./src/remark-gameplay-card-toc.mjs";

export default defineConfig({
  site: "https://itdatd.azureknights.net",
  compressHTML: true,
  scopedStyleStrategy: "where",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGameplayCardToc],
    }),
  },
  integrations: [
    starlight({
      title: "ITD&TD",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      description: "Core rules, setting reference, and compendium for ITD&TD.",
      customCss: ["./src/styles/custom.css"],
      components: {
        ThemeSelect: "./src/components/HeadingThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jojarth/itdatd_data",
        },
      ],
      sidebar: [
        {
          label: "Player's Guide",
          collapsed: true,
          items: [
            {
              label: "Welcome to ITD&TD",
              collapsed: true,
              items: [{ slug: "playersguide" }],
            },
            {
              label: "Introduction",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/00-introduction" } },
              ],
            },
            {
              label: "Chapter 01: Core Rules",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/01-core_rules" } },
              ],
            },
            {
              label: "Chapter 02: Character Creation",
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "playersguide/02-character_creation",
                  },
                },
              ],
            },
            {
              label: "Chapter 03: Ancestries",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/03-ancestries" } },
              ],
            },
            {
              label: "Chapter 04: Backgrounds",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/04-backgrounds" } },
              ],
            },
            {
              label: "Chapter 05: Classes",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/05-classes" } },
              ],
            },
            {
              label: "Chapter 06: Equipment",
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "playersguide/06-equipment",
                  },
                },
              ],
            },
            {
              label: "Chapter 07: Adventuring",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/07-adventuring" } },
              ],
            },
            {
              label: "Chapter 08: Combat",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/08-combat" } },
              ],
            },
            {
              label: "Chapter 09: Spellcasting",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/09-spellcasting" } },
              ],
            },
            {
              label: "Chapter 10: Spell Lists",
              collapsed: true,
              items: [
                { autogenerate: { directory: "playersguide/10-spell_lists" } },
              ],
            },
            {
              label: "Chapter 11: Advancement",
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "playersguide/11-character_advancement",
                  },
                },
              ],
            },
          ],
        },
        {
          label: "Game Master's Guide",
          collapsed: true,
          items: [{ label: "Overview", slug: "gamemastersguide" }],
        },
        {
          label: "Folio of Fiends",
          collapsed: true,
          items: [
            { label: "Overview", slug: "foliooffiends" },
            {
              label: "Chapter 01: Essences",
              collapsed: true,
              items: [
                { autogenerate: { directory: "foliooffiends/01-essences" } },
              ],
            },
          ],
        },
        {
          label: "World of Cerrix",
          collapsed: true,
          items: [
            { label: "Overview", slug: "worldofcerrix" },
            {
              label: "Chapter 01: The World",
              collapsed: true,
              items: [
                { autogenerate: { directory: "worldofcerrix/01-the_world" } },
              ],
            },
            {
              label: "Chapter 02: Enolin",
              collapsed: true,
              items: [
                { label: "Overview", slug: "worldofcerrix/02-enolin" },
                {
                  label: "Aslund and Deinland",
                  collapsed: true,
                  items: [
                    {
                      label: "Overview",
                      slug: "worldofcerrix/02-enolin/01-aslund_and_deinland",
                    },
                    {
                      label: "Berserkir",
                      slug: "worldofcerrix/02-enolin/01-aslund_and_deinland/berserkir",
                    },
                    {
                      label: "Jofurr",
                      slug: "worldofcerrix/02-enolin/01-aslund_and_deinland/jofurr",
                    },
                    {
                      label: "Skald",
                      slug: "worldofcerrix/02-enolin/01-aslund_and_deinland/skald",
                    },
                    {
                      label: "Ulfhednar",
                      slug: "worldofcerrix/02-enolin/01-aslund_and_deinland/ulfhednar",
                    },
                  ],
                },
                {
                  label: "Vigorio, Lannion, and Arencia",
                  slug: "worldofcerrix/02-enolin/02-vigorio_lannion_and_arencia",
                },
                { label: "Oraktos", slug: "worldofcerrix/02-enolin/03-oraktos" },
                {
                  label: "The Northern Isles",
                  slug: "worldofcerrix/02-enolin/04-the_northern_isles",
                },
                { label: "Mahased", slug: "worldofcerrix/02-enolin/05-mahased" },
              ],
            },
            {
              label: "Chapter 03: Religions",
              collapsed: true,
              items: [
                { autogenerate: { directory: "worldofcerrix/03-religions" } },
              ],
            },
            {
              label: "Chapter 04: Magic",
              collapsed: true,
              items: [
                { autogenerate: { directory: "worldofcerrix/04-magic" } },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
