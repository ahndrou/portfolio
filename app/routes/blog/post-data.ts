export type Post = {
  slug: string;
  date: Date;
  title: string;
  duration: string;
  blurb: string;
};

export const POSTS: Post[] = [
  {
    slug: "test-post-1",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-2",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-3",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
  {
    slug: "test-post-4",
    date: new Date("2026-10-07"),
    title: "My first blog post",
    duration: "8 mins",
    blurb: "How I wrote my first blog post.",
  },
];
