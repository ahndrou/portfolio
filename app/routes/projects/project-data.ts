interface Project {
  title: string;
  slug: string;
  videoSrc: string;
  websiteUrl: string;
  githubUrl: string;
  paragraphs: string[];
  techList: string[];
}

export const projects: Project[] = [
  {
    title: "Asteroid Field",
    slug: "asteroid-field",
    videoSrc:
      "https://mnfafjckft1htxpy.public.blob.vercel-storage.com/asteroid_field_demo.mp4",
    websiteUrl: "https://3d-asteroids.netlify.app/",
    githubUrl: "https://github.com/ahndrou/Space-Shooter",
    paragraphs: [
      "A 3D, third-person shooter game playable in the browser.",
      "With React handling the game state, this project was an opportunity to use React in a larger codebase with an unfamiliar context.",
    ],
    techList: [
      "ThreeJS",
      "Rapier Physics",
      "GLSL",
      "Zustand",
      "Navigation AI",
      "React",
    ],
  },
  {
    title: "Weather Forecast",
    slug: "weather-forecast",
    videoSrc:
      "https://mnfafjckft1htxpy.public.blob.vercel-storage.com/weather-app-demo.mp4",
    websiteUrl:
      "https://weather-app-11ve-4zezr9sk7-Billys-projects-64d55d66.vercel.app/",
    githubUrl: "https://github.com/ahndrou/weather-app",
    paragraphs: [
      "Combines two endpoints from the OpenMeteo API to produce a weather forecast.",
    ],
    techList: ["Zod", "OpenMeteo API", "Tailwind CSS", "React"],
  },
  {
    title: "Markdown Editor",
    slug: "markdown-editor",
    videoSrc:
      "https://mnfafjckft1htxpy.public.blob.vercel-storage.com/md-editor-demo.mp4",
    websiteUrl: "https://markdown-editor-ecru-six.vercel.app/",
    githubUrl: "https://github.com/ahndrou/markdown-editor",
    paragraphs: [
      "An editor which allows a user to create, save and edit markdown files with a live preview of the formatted output.",
    ],
    techList: ["Markdown", "LocalStorage API", "ShadCn", "React"],
  },
];
