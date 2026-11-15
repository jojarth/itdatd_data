import fs from 'node:fs';
import path from 'node:path';

// Data-driven cards that support the toc attribute. Each entry maps a card
// component and its list component to the folder holding their data files.
const DATA_CARDS = {
  conditions: {
    dir: path.resolve(process.cwd(), 'src/content/data/conditiondata'),
    card: 'ConditionCard',
    list: 'ConditionList',
  },
  downtimeEvents: {
    dir: path.resolve(process.cwd(), 'src/content/data/downtimedata'),
    card: 'DowntimeEventCard',
    list: 'DowntimeEventList',
  },
  injuries: {
    dir: path.resolve(process.cwd(), 'src/content/data/injurydata/injuries'),
    card: 'InjuryCard',
    list: 'InjuryList',
  },
};

function dataCardFor(name) {
  return Object.values(DATA_CARDS).find((config) => config.card === name || config.list === name);
}

// Reads title and tags from each data file's frontmatter. Read fresh on every
// page so edits to the data show up without restarting the dev server.
function readEntries(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const id = file.replace(/\.mdx$/, '');
      const text = fs.readFileSync(path.join(dir, file), 'utf8');
      const frontmatter = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
      const title = frontmatter.match(/^title:\s*["']?(.*?)["']?\s*$/m)?.[1] ?? id;
      const tagBlock = frontmatter.match(/^tags:\s*\n((?:\s+-\s*.*\n?)*)/m)?.[1] ?? '';
      const tags = [...tagBlock.matchAll(/-\s*["']?(.*?)["']?\s*$/gm)].map((m) => m[1]);
      return { id, title, tags };
    });
}

function tocHeading(title, depth, id) {
  return {
    type: 'heading',
    depth,
    children: [{ type: 'text', value: title }],
    data: {
      hProperties: {
        className: ['gameplay-card-toc-heading'],
        ...(id ? { id } : {}),
      },
    },
  };
}

function stringAttribute(name, value) {
  return { type: 'mdxJsxAttribute', name, value };
}

// <ConditionCard id="x" toc /> gets a hidden heading whose id is the entry id,
// so Link anchors still work. The card itself then skips its own anchor.
function expandDataCard(child, entries) {
  const id = getStringAttribute(child, 'id');
  const condition = entries.find((entry) => entry.id === id);
  if (!condition) return undefined;
  const depth = getNumericAttribute(child, 'tocDepth', 3);
  child.attributes = child.attributes.filter((a) => a.name !== 'anchor' && a.name !== 'toc');
  child.attributes.push(stringAttribute('anchor', 'false'));
  return [tocHeading(condition.title, depth, condition.id), child];
}

// <ConditionList toc /> becomes one hidden heading plus one single-entry
// list per entry, so each entry appears in the table of contents.
function expandDataList(child, all) {
  const tag = getStringAttribute(child, 'tag');
  const depth = getNumericAttribute(child, 'tocDepth', 3);
  const entries = all
    .filter((entry) => !tag || entry.tags.includes(tag))
    .sort((a, b) => a.title.localeCompare(b.title));
  if (entries.length === 0) return undefined;
  return entries.flatMap((entry) => [
    tocHeading(entry.title, depth, entry.id),
    {
      type: 'mdxJsxFlowElement',
      name: child.name,
      attributes: [stringAttribute('id', entry.id), stringAttribute('anchor', 'false')],
      children: [],
    },
  ]);
}

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
  KeywordFeatureCard: { title: 'Keyword Feature', level: 4, levelAttribute: 'level' },
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

    const dataCard = child.type === 'mdxJsxFlowElement' ? dataCardFor(child.name) : undefined;
    if (dataCard && hasTruthyAttribute(child, 'toc')) {
      const entries = readEntries(dataCard.dir);
      const replacement =
        child.name === dataCard.card ? expandDataCard(child, entries) : expandDataList(child, entries);
      if (replacement) {
        parent.children.splice(index, 1, ...replacement);
        index += replacement.length - 1;
        continue;
      }
    }

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
