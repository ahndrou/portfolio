import weatherApp from "./assets/weather-app.png";

interface Project {
  title: string;
  slug: string;
  imgSrc: string;
  websiteUrl: string;
  githubUrl: string;
  paragraphs: string[];
}

export const projects: Project[] = [
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
  },
];
