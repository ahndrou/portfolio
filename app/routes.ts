import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  layout("routes/layouts/main-layout.tsx", [
    route("about", "routes/about.tsx"),
    route("contact", "routes/contact.tsx"),
    route("projects", "routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
