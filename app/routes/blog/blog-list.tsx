import type { Route } from "./+types/blog-list";
import { POSTS, type Post } from "./post-data";
import { PostRow } from "./post-row";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Andrew Smith - Writing" },
    {
      name: "description",
      content: "Notes and write-ups from Andrew Smith.",
    },
  ];
}

// Newest first, grouped by year. Years come out in descending order because
// Map preserves insertion order and the posts are already sorted.
function groupByYear(posts: Post[]) {
  const sorted = [...posts].sort((a, b) => b.date.getTime() - a.date.getTime());
  const groups = new Map<number, Post[]>();

  for (const post of sorted) {
    const year = post.date.getUTCFullYear();
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }

  return [...groups];
}

export default function BlogList() {
  const years = groupByYear(POSTS);

  return (
    <>
      <header className="grid gap-5">
        <div className="grid gap-3">
          <span className="trail-line text-accent font-mono text-xs tracking-wide uppercase">
            Blog - {POSTS.length} posts
          </span>
          <h1 className="font-display text-text-strong text-xl leading-tight font-semibold">
            Writing
          </h1>
        </div>

        <p className="text-text-muted max-w-lg">
          Notes on things I've learned and found interesting, newest first.
        </p>
      </header>

      <main className="grid gap-7">
        {years.map(([year, posts]) => (
          <section key={year} className="grid gap-6">
            <h2 className="trail-line text-text-quiet font-mono text-xs tracking-wide uppercase">
              {year}
            </h2>

            <ul className="surface border-line-strong flex flex-col rounded-md border">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="not-last:border-line-strong not-last:border-b"
                >
                  <PostRow post={post} showYear={false} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
