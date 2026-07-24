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

function getPositiveIntegerAttribute(node, name, fallback) {
  const attribute = getAttribute(node, name);
  if (!attribute) return fallback;

  const rawValue =
    typeof attribute.value === 'string'
      ? attribute.value
      : attribute.value?.type === 'mdxJsxAttributeValueExpression'
        ? attribute.value.value
        : undefined;

  const value = Number(rawValue);
  return Number.isInteger(value) && value > 0 ? value : fallback;
}

function ordinal(value) {
  const remainder = value % 100;
  if (remainder >= 11 && remainder <= 13) return `${value}th`;

  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}

const reusableTocDetails = {
  KeywordFeatureCard: { title: 'Keyword Feature', level: 5 },
  OrderFeatureCard: { title: 'Order', level: 1, levelAttribute: 'level' },
  Establishment: { title: 'Establishment', level: 10 },
};

function getTocTitle(child) {
  if (child.name === 'GameplayCard') {
    const title = getStringAttribute(child, 'title');
    const subeyebrow = getStringAttribute(child, 'subeyebrow');
    const levelMatch = subeyebrow?.match(/^\s*(\d+)(st|nd|rd|th)\s+level\b/i);

    if (title && levelMatch) {
      const level = `${levelMatch[1]}${levelMatch[2].toLowerCase()} Level`;
      return `${level}: ${title}`;
    }

    return title;
  }

  const explicitTitle = getStringAttribute(child, 'tocTitle') ?? getStringAttribute(child, 'title');
  if (explicitTitle) return explicitTitle;

  const reusableDetails = reusableTocDetails[child.name];
  if (!reusableDetails) return undefined;

  const level = reusableDetails.levelAttribute
    ? getPositiveIntegerAttribute(child, reusableDetails.levelAttribute, reusableDetails.level)
    : reusableDetails.level;

  return `${ordinal(level)} Level: ${reusableDetails.title}`;
}

function visitChildren(parent) {
  if (!Array.isArray(parent.children)) return;

  for (let index = 0; index < parent.children.length; index += 1) {
    const child = parent.children[index];

    if (child.type === 'mdxJsxFlowElement' && hasTruthyAttribute(child, 'toc')) {
      const title = getTocTitle(child);

      if (title) {
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
