import remarkGameplayCardToc from '../remark-gameplay-card-toc.mjs';

export default function gameplayCardToc() {
  return {
    name: 'itdatd-gameplay-card-toc',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [...config.markdown.remarkPlugins, remarkGameplayCardToc],
          },
        });
      },
    },
  };
}
