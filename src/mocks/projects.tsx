import fptID from "@/assets/fpt-id.webp";
import dynamicForm from "@/assets/dynamic-form.webp";
import calculator from "@/assets/calculator.webp";

export type TProject = {
  name?: string;
  type?: string;
  role?: string;
  git?: string;
  image?: string;
  description?: string;
  website?: string;
  techStack?: string[];
};

const projects: TProject[] = [
  {
    name: "FPT ID",
    type: "client",
    role: "FE",
    image: fptID,
    description:
      "An SSO project enabling single-login access to all FPT services without repeated login prompts. you find this in LongChau, FShare,...",
    website: "https://accounts.fpt.vn/",
    techStack: ["JQuery", "SCSS", "C# .NET Core 6", "Blazor", "Javascript"],
  },
  {
    name: "Super Market Calculator",
    type: "personal",
    role: "FE",
    git: "https://github.com/CapooCat/super-market-calculator",
    image: calculator,
    description: "A user-friendly mobile Super Market Calculator designed for elderly users.",
    website: "https://market-calculator-dev.netlify.app/",
    techStack: ["React", "React Hook Form", "PrimeReact", "Typescript", "Tailwind", "SCSS"],
  },
  {
    name: "Dynamic Form",
    type: "personal",
    role: "FE",
    git: "https://github.com/CapooCat/dynamic-form",
    image: dynamicForm,
    description: "A performance-optimized dynamic form demonstration",
    website: "https://dat-dynamic-form.netlify.app/",
    techStack: ["React", "React Hook Form", "PrimeReact", "Javascript", "Tailwind", "SCSS"],
  },
];

export default projects;
