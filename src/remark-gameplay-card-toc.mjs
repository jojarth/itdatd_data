function getAttribute(node, name) {
  return node.attributes?.find((attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === name);
}

function getStringAttribute(node, name) {
  const attribute = getAttribute(node, name);
  return typeof attribute?.value === 'string' ? attribute.value : undefined;
}

function hasTruthyAttribute(node, name) {
  const attribute = getAttribute(node, name);
  if (!attribute) return false;
  if (attribute.value === null || attribute.value === undefined) return true;
  if (typeof attribute.value === 'string') return attribute.value !== 'false';
  if (attribute.value.type === 'mdxJsxAttributeValueExpression') {
    return attribute.value.value !== 'false';
  }
  return true;
}

function getNumericAttribute(node, name, fallback) {
  const attribute = getAttribute(node, name);
  if (!attribute) return fallback;

  const rawValue =
    typeof attribute.value === 'string'
      ? attribute.value
      : attribute.value?.type === 'mdxJsxAttributeValueExpression'
        ? attribute.value.value
        : undefined;

  const value = Number(rawValue);
  return Number.isInteger(value) && value >= 2 && value <= 4 ? value : fallback;
}

function visitChildren(parent) {
  if (!Array.isArray(parent.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (child.type === 'mdxJsxFlowElement' && child.name === 'GameplayCard') {
      const title = getStringAttribute(child, 'title');

      if (title && hasTruthyAttribute(child, 'toc')) {
        parent.children.splice(index, 0, {
          type: 'heading',
          depth: getNumericAttribute(child, 'tocDepth', 3),
          children: [{ type: 'text', value: title }],
          data: {
            hProperties: {
              className: ['gameplay-card-toc-heading'],
            },
          },
        });
        index += 1;
      }
    }

    visitChildren(child);
  }
}

export default function remarkGameplayCardToc() {
  return (tree) => {
    visitChildren(tree);
  };
}
