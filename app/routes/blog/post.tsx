import { data } from "react-router";
import type { Route } from "./+types/post";
import { POSTS } from "./post-data";

export function loader({ params }: Route.LoaderArgs) {
  const post = POSTS.find((post) => post.slug === params.slug);

  if (!post) throw data("Not found", { status: 404 });

  const loaderData = {
    title: post.title,
    blurb: post.blurb,
  };

  return loaderData;
}

export function meta({ loaderData }: Route.MetaArgs) {
  return [{ title: loaderData?.title ?? "Post not found" }];
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const { title, blurb } = loaderData;

  return (
    <main className="grid gap-5">
      <h1 className="font-display text-text-strong text-xl leading-tight font-semibold">
        {title}
      </h1>
      <p className="text-text-muted">{blurb}</p>
    </main>
  );
}
