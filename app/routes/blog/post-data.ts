import type { MDXContent } from "mdx/types";

type Frontmatter = {
  title: string;
  date: string;
  duration: string;
  blurb: string;
};

type PostModule = {
  default: MDXContent;
  frontmatter: Frontmatter;
};

// Using eager imports, the module itself is the value, not a loader for it.
const modules = import.meta.glob<PostModule>("/app/content/*.mdx", {
  eager: true,
});

export const POSTS = Object.entries(modules).map(([path, module]) => ({
  slug: path
    .split("/")
    .pop()!
    .replace(/\.mdx$/, ""),
  ...module.frontmatter,
  date: new Date(module.frontmatter.date),
  Content: module.default,
}));

export type Post = (typeof POSTS)[number];
