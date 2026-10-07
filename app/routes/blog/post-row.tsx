import { Link } from "react-router";
import type { Post } from "./post-data";

const fullDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const shortDateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

type PostRowProps = {
  post: Post;
  // The blog archive groups posts under year headings, so the year is redundant there.
  showYear?: boolean;
};

export function PostRow({
  post: { slug, date, title, duration, blurb },
  showYear = true,
}: PostRowProps) {
  const formatter = showYear ? fullDateFormatter : shortDateFormatter;

  return (
    <Link
      to={`/blog/${slug}`}
      viewTransition
      className={`hover:bg-fill group grid items-baseline gap-x-5 p-4 ${
        showYear
          ? "grid-cols-[5.5rem_1fr] sm:grid-cols-[5.5rem_1fr_auto]"
          : "grid-cols-[3.5rem_1fr] sm:grid-cols-[3.5rem_1fr_auto]"
      }`}
    >
      <time
        dateTime={date.toISOString().slice(0, 10)}
        className="text-text-quiet text-sm"
      >
        {formatter.format(date)}
      </time>
      <div>
        <h3 className="text-text-strong group-hover:text-accent">{title}</h3>
        <p className="text-text-muted text-sm">{blurb}</p>
      </div>
      {/* Sits under the blurb on small screens, and in its own column from sm upwards. */}
      <span className="text-text-quiet col-start-2 text-sm sm:col-start-3 sm:row-start-1 sm:text-end">
        {duration}
      </span>
    </Link>
  );
}
