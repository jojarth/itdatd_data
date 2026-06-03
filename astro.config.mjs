// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import gameplayCardToc from './src/integrations/gameplay-card-toc.mjs';

export default defineConfig({
  site: 'https://itdatd.azureknights.net',
  integrations: [
    starlight({
      title: 'ITD&TD',
      description: 'Core rules, setting reference, and compendium for ITD&TD.',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jojarth/itdatd_data' },
      ],
      sidebar: [
        {
          label: "Player's Guide",
          items: [
            { label: "Player's Guide Main Page", slug: 'playersguide' },
            { label: "Introduction", slug: 'playersguide/00-introduction' },
            { label: "Chapter 01: How to Play", slug: 'playersguide/01-how_to_play' },
          ],
        },
        {
          label: "Game Master's Guide",
          items: [
            { label: 'Overview', slug: 'gamemastersguide' },
          ],
        },
        {
          label: 'Folio of Fiends',
          items: [{ label: 'Overview', slug: 'foliooffiends' }],
        },
        {
          label: 'World of Cerrix',
          items: [{ label: 'Overview', slug: 'worldofcerrix' }],
        },
      ],
    }),
    gameplayCardToc(),
  ],
});
