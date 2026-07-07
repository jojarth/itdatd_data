import { getCollection } from "astro:content";

type Filter = {
  level?: number;
  classes?: string | string[];
  school?: string;
  titleIncludes?: string;
  datatype?: string;
};

export async function querySpells(filter: Filter = {}) {
  const all = await getCollection("data");
  const { level, classes, school, titleIncludes, datatype = "spell" } = filter;

  return all.filter((entry) => {
    const d = entry.data as Record<string, any>;
    if (datatype && d.datatype !== datatype) return false;
    if (level !== undefined && d.level !== level) return false;
    if (school && d.school !== school) return false;
    if (titleIncludes && !String(d.title || "").toLowerCase().includes(titleIncludes.toLowerCase())) return false;
    if (classes) {
      const want = Array.isArray(classes) ? classes : [classes];
      if (!Array.isArray(d.classes)) return false;
      for (const c of want) if (!d.classes.includes(c)) return false;
    }
    return true;
  });
}

export type { Filter };
