export type Encumbrance =
  | { type: "fixed"; value: number }
  | { type: "bundle"; quantity: number }
  | { type: "states"; values: Record<string, number | string> }
  | { type: "assumed" };

const formatValue = (value: number | string) =>
  typeof value === "number" ? `${value}` : value;

export function formatEncumbrance(encumbrance: Encumbrance): string {
  switch (encumbrance.type) {
    case "fixed":
      return `${encumbrance.value}`;
    case "bundle":
      return `B(${encumbrance.quantity})`;
    case "states":
      return Object.entries(encumbrance.values)
        .map(([state, value]) => `${formatValue(value)} ${state}`)
        .join(" / ");
    case "assumed":
      return "Assumed";
  }
}

export function formatStatePair(encumbrance: Encumbrance): string {
  if (encumbrance.type !== "states") return formatEncumbrance(encumbrance);
  return Object.values(encumbrance.values).map(formatValue).join(" / ");
}
