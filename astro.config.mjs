// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://itdatd.azureknights.net',
  integrations: [
    starlight({
      title: 'In the Deep and the Dark',
      description: 'Core rules, setting reference, and compendium for ITD&TD.',
      customCss: ['./src/styles/custom.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/jojarth/itdatd_data' },
      ],
      sidebar: [
        {
          label: 'Site Reference',
          items: [{ label: 'Writing Tools', slug: 'site-reference' }],
        },
        {
          label: "Player's Guide",
          items: [
            { label: 'Overview', slug: 'playersguide' },
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
  ],
});
