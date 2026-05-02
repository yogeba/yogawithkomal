import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content");

export type ContentDir = "classes" | "locations" | "seo" | "matrix";

export type ContentDoc = {
  slug: string;
  data: Record<string, unknown>;
  body: string;
};

export function loadDoc(dir: ContentDir, slug: string): ContentDoc | null {
  const file = path.join(ROOT, dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  return { slug, data: parsed.data, body: parsed.content };
}

export function listDocs(dir: ContentDir): ContentDoc[] {
  const subdir = path.join(ROOT, dir);
  if (!fs.existsSync(subdir)) return [];
  return fs
    .readdirSync(subdir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => loadDoc(dir, f.replace(/\.mdx$/, ""))!)
    .filter(Boolean);
}
