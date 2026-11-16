// Where the full lists of conditions and hindrances live.
// ConditionLink points here.
export const CONDITIONS_PAGE = "/playersguide/07-adventuring/05-afflictions-and-conditions/";

// The kinds of entry these components can show. Conditions are partly built
// from hindrances. Hindrance anchors get a prefix so they never clash with a condition.
export type RuleKind = "condition" | "hindrance";

export const KINDS: Record<RuleKind, { collection: "conditions" | "hindrances"; folder: string; eyebrow: string; anchorPrefix: string }> = {
  condition: { collection: "conditions", folder: "conditiondata", eyebrow: "Condition", anchorPrefix: "" },
  hindrance: { collection: "hindrances", folder: "hindrancedata", eyebrow: "Hindrance", anchorPrefix: "hindrance-" },
};

export function kindFor(kind: string | undefined): (typeof KINDS)[RuleKind] {
  const config = KINDS[(kind ?? "condition") as RuleKind];
  if (!config) throw new Error(`Unknown kind "${kind}". Use condition or hindrance.`);
  return config;
}

export const stackingLabels: Record<string, string> = {
  highest: "Use only the highest value",
  stacks: "Values add together",
  exclusive: "Only one can apply at a time",
  modifier: "Follows the modifier stacking rules (Static Bonus Types)",
  widest: "Use only the widest scope",
  worst: "Use only the most severe",
};

// Builds the display name of a hindrance as a condition uses it,
// such as "Sluggish (1)" or "Attribute Penalty (physical, 1)".
export function partLabel(title: string, parameter?: string, value?: number): string {
  const bits = [parameter, value].filter((bit) => bit !== undefined && bit !== "");
  return bits.length ? `${title} (${bits.join(", ")})` : title;
}
