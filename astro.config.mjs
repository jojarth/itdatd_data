// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import gameplayCardToc from "./src/integrations/gameplay-card-toc.mjs";
import injectProperties from "./src/integrations/inject-properties.mjs";

export default defineConfig({
  site: "https://itdatd.azureknights.net",
  integrations: [
    starlight({
      title: "ITD&TD",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      description: "Core rules, setting reference, and compendium for ITD&TD.",
      customCss: ["./src/styles/custom.css"],
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
              label: "Chapter 06: Equipment and Wealth",
              collapsed: true,
              items: [
                {
                  autogenerate: {
                    directory: "playersguide/06-equipment_and_wealth",
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
              label: "Chapter 11: Character Advancement",
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
          items: [{ label: "Overview", slug: "gamemastersguide" }],
        },
        {
          label: "Folio of Fiends",
          items: [{ label: "Overview", slug: "foliooffiends" }],
        },
        {
          label: "World of Cerrix",
          items: [{ label: "Overview", slug: "worldofcerrix" }],
        },
      ],
    }),
    gameplayCardToc(),
    injectProperties(),
  ],
});
