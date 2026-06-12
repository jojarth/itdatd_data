import remarkInjectProperties from "../remark-inject-properties.mjs";

export default function injectProperties() {
  return {
    name: "itdatd-inject-properties",
    hooks: {
      "astro:config:setup": ({ config, updateConfig }) => {
        updateConfig({
          markdown: {
            remarkPlugins: [
              ...config.markdown.remarkPlugins,
              remarkInjectProperties,
            ],
          },
        });
      },
    },
  };
}
