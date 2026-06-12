import fs from "fs";
import path from "path";

function readProperties() {
  try {
    const p = path.join(
      process.cwd(),
      "src",
      "content",
      "data",
      "weapondata",
      "properties.json",
    );
    const raw = fs.readFileSync(p, "utf8");
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

export default function remarkInjectProperties() {
  const properties = readProperties();

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

    if (!Array.isArray(properties) || properties.length === 0) return;

    for (let i = 0; i < tree.children.length; i += 1) {
      const node = tree.children[i];

      // Look for the JSX expression that maps `properties` (e.g. `{properties.map(...`) and replace it
      if (
        node.type === "mdxFlowExpression" &&
        typeof node.value === "string" &&
        node.value.includes("properties.map")
      ) {
        const styleString =
          "margin-bottom: 2rem; border-left: 4px solid var(--sl-color-accent); padding-left: 1rem;";

        const sectionNodes = properties.map((p) => ({
          type: "mdxJsxFlowElement",
          name: "section",
          attributes: [
            { type: "mdxJsxAttribute", name: "id", value: p.id },
            { type: "mdxJsxAttribute", name: "class", value: "property-block" },
            { type: "mdxJsxAttribute", name: "style", value: styleString },
          ],
          children: [
            {
              type: "heading",
              depth: 4,
              children: [{ type: "text", value: p.name }],
              data: { hProperties: { id: p.id } },
            },
            {
              type: "paragraph",
              children: [{ type: "text", value: p.description }],
            },
          ],
        }));

        // Replace the single expression node with the generated section nodes
        tree.children.splice(i, 1, ...sectionNodes);
        break;
      }
    }
  };
}
