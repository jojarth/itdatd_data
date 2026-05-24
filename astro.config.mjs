// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://itdatd.azureknights.net',
  integrations: [
    starlight({
      title: 'In the Deep and the Dark',
      description: 'Core rules, setting reference, and compendium for ITD&TD.',
        social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/jojarth/itdatd_data' },
        ],
      sidebar: [
        {
          label: "Player's Guide",
          items: [
            { label: 'Overview', link: '/playersguide/' },
            { label: 'Character Creation', link: '/phb/character-creation/' },
            { label: 'Classes', link: '/phb/classes/' },
            { label: 'Equipment', link: '/phb/equipment/' },
            { label: 'Combat', link: '/phb/combat/' },
          ],
        },
        {
          label: "Game Master's Guide",
          items: [
            { label: 'Overview', link: '/gamemastersguide/' },
            { label: 'Running the Game', link: '/dmg/running-the-game/' },
            { label: 'Treasure', link: '/dmg/treasure/' },
          ],
        },
        {
          label: 'Folio of Fiends',
          items: [{ label: 'Overview', link: '/foliooffiends/' }],
        },
      ],
    }),
  ],
});

