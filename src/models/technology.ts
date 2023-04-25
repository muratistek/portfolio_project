import { StaticImageData } from "next/image";

// Icons Import
import css from "../../public/assets/tech/css.png";
import docker from "../../public/assets/tech/docker.png";
import figma from "../../public/assets/tech/figma.png";
import git from "../../public/assets/tech/git.png";
import html from "../../public/assets/tech/html.png";
import javascript from "../../public/assets/tech/javascript.png";
import mongodb from "../../public/assets/tech/mongodb.png";
import nodejs from "../../public/assets/tech/nodejs.png";
import reactjs from "../../public/assets/tech/reactjs.png";
import redux from "../../public/assets/tech/redux.png";
import tailwind from "../../public/assets/tech/tailwind.png";
import typescript from "../../public/assets/tech/typescript.png";
import threejs from "../../public/assets/tech/threejs.svg";

export type Technology = {
  name: string;
  icon: StaticImageData;
};

export const technologies: Technology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];