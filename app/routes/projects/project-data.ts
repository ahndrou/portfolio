import weatherApp from "./assets/weather-app.png";
import markdownEditor from "./assets/md-editor.png";
import spaceShooter from "./assets/space-shooter.png";

interface Project {
  title: string;
  slug: string;
  imgSrc: string;
  websiteUrl: string;
  githubUrl: string;
  paragraphs: string[];
  techList: string[];
}

export const projects: Project[] = [
  {
    title: "Space Shooter",
    slug: "space-shooter",
    imgSrc: spaceShooter,
    websiteUrl: "https://3d-asteroids.netlify.app/",
    githubUrl: "https://github.com/ahndrou/Space-Shooter",
    paragraphs: [
      "A 3D space shooter loosely based on the classic game Asteroids.",
      "Implemented using ThreeJS with custom GLSL shaders and physics using RapierJS.",
    ],
    techList: ["ThreeJS", "Rapier Physics", "GLSL", "Zustand", "React"],
  },
  {
    title: "Weather Forecast",
    slug: "weather-forecast",
    imgSrc: weatherApp,
    websiteUrl:
      "https://weather-app-11ve-4zezr9sk7-andrews-projects-64d55d66.vercel.app/",
    githubUrl: "https://github.com/ahndrou/weather-app",
    paragraphs: [
      "Uses two OpenMeteo API endpoints to produce a weather forecast.",
      "I learned a lot about asynchronous requests and state, as well as schema validation using Zod. This was also a nice opportunity for me to play around with view transitions for a more polished UX.",
    ],
    techList: ["Zod", "OpenMeteo API", "Tailwind CSS", "React"],
  },
  {
    title: "Markdown Editor",
    slug: "markdown-editor",
    imgSrc: markdownEditor,
    websiteUrl: "https://markdown-editor-ecru-six.vercel.app/",
    githubUrl: "https://github.com/ahndrou/markdown-editor",
    paragraphs: [
      "An editor for the markdown language. Markdown can be written in one of the sections, and a rendered version is displayed in real-time in an adjacent section.",
      "Markdown documents can be created and saved to the browsers local storage to persist between sessions.",
    ],
    techList: ["Markdown", "LocalStorage API", "ShadCn", "React"],
  },
];
