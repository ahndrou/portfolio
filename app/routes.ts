import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/main-layout.tsx", [
    index("routes/landing.tsx"),
    route("contact", "routes/contact/route.tsx"),
    route("projects", "routes/projects/route.tsx"),
    route("blog", "routes/blog/blog-list.tsx"),
    route("blog/:slug", "routes/blog/post.tsx"),
  ]),
] satisfies RouteConfig;
