import fs from "fs";
import path from "path";

function readJsonFile(filename) {
  try {
    const p = path.join(
      process.cwd(),
      "src",
      "content",
      "data",
      "weapondata",
      filename,
    );
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export default function remarkInjectProperties() {
  const properties = readJsonFile("properties.json");
  const features = readJsonFile("features.json");

  return (tree, file) => {
    const filePath =
      file && file.history && file.history[0]
        ? file.history[0]
        : file && file.path
          ? file.path
          : "";
    if (!filePath) return;

    // Only target the specific MDX page
    if (
      !filePath.includes(
        "playersguide/06-equipment_and_wealth/weapon_table.mdx",
      ) &&
      !filePath.endsWith("weapon_table.mdx")
    )
      return;

    const itemsByType = { properties, features };

    const styleString =
      "margin-bottom: 2rem; border-left: 4px solid var(--sl-color-accent); padding-left: 1rem;";

    for (let i = 0; i < tree.children.length; i += 1) {
      const node = tree.children[i];

      if (node.type === "mdxFlowExpression" && typeof node.value === "string") {
        const type = node.value.includes("properties.map")
          ? "properties"
          : node.value.includes("features.map")
            ? "features"
            : null;
        if (!type) continue;

        const items = itemsByType[type];
        if (!Array.isArray(items) || items.length === 0) continue;

        const sectionNodes = items.map((p) => {
          const paras = Array.isArray(p.description)
            ? p.description.map((d) => ({
                type: "paragraph",
                children: [{ type: "text", value: d }],
              }))
            : [
                {
                  type: "paragraph",
                  children: [
                    { type: "text", value: String(p.description || "") },
                  ],
                },
              ];

          return {
            type: "mdxJsxFlowElement",
            name: "section",
            attributes: [
              { type: "mdxJsxAttribute", name: "id", value: p.id },
              {
                type: "mdxJsxAttribute",
                name: "class",
                value: "property-block",
              },
              { type: "mdxJsxAttribute", name: "style", value: styleString },
            ],
            children: [
              {
                type: "heading",
                depth: 4,
                children: [{ type: "text", value: p.name }],
                data: { hProperties: { id: p.id } },
              },
              ...paras,
            ],
          };
        });

        tree.children.splice(i, 1, ...sectionNodes);
        i += sectionNodes.length - 1;
      }
    }
  };
}
