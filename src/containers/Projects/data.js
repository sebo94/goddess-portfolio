import { importAllImages } from "../../utility";

const images = importAllImages(
  require.context("../../assets/images/projects", false, /\.(png|jpe?g|svg)$/)
);

const projects = [
  {
    source: `${images["project1.png"]}`,
    alt: "alt1",
    href: "https://www.google.com",
    category: "Installations",
    height: "xl",
  },
  {
    source: `${images["project2.jpg"]}`,
    alt: "alt2",
    href: "https://www.google.com",
    category: "Painting",
    height: "xs",
  },
  {
    source: `${images["project3.jpg"]}`,
    alt: "alt3",
    href: "https://www.google.com",
    category: "Illustration",
    height: "s",
  },
  {
    source: `${images["project4.jpg"]}`,
    alt: "alt4",
    href: "https://www.google.com",
    category: "Painting",
    height: "m",
  },
  {
    source: `${images["project5.jpg"]}`,
    alt: "alt5",
    href: "https://www.google.com",
    category: "Illustration",
    height: "l",
  },
  {
    source: `${images["project6.jpg"]}`,
    alt: "alt6",
    href: "https://www.google.com",
    category: "Installation",
    height: "xs",
  },
  {
    source: `${images["project1.png"]}`,
    alt: "alt7",
    href: "https://www.google.com",
    category: "Installations",
    height: "xl",
  },
  {
    source: `${images["project2.jpg"]}`,
    alt: "alt8",
    href: "https://www.google.com",
    category: "Painting",
    height: "l",
  },
  {
    source: `${images["project3.jpg"]}`,
    alt: "alt9",
    href: "https://www.google.com",
    category: "Illustration",
    height: "s",
  },
  {
    source: `${images["project4.jpg"]}`,
    alt: "alt10",
    href: "https://www.google.com",
    category: "Painting",
    height: "m",
  },
  {
    source: `${images["project5.jpg"]}`,
    alt: "alt11",
    href: "https://www.google.com",
    category: "Illustration",
    height: "m",
  },
  {
    source: `${images["project6.jpg"]}`,
    alt: "alt12",
    href: "https://www.google.com",
    category: "Installation",
    height: "xs",
  },
];

const buttons = [
  {
    label: "All",
    filter: "*",
    animation: {
      type: "fade-up",
      delay: "0",
      duration: "1000",
      easing: "ease-in",
    },
  },
  {
    label: "Installations",
    filter: ".Installation",
    animation: {
      type: "fade-up",
      delay: "100",
      duration: "1000",
      easing: "ease-in",
    },
  },
  {
    label: "Illustrations",
    filter: ".Illustration",
    animation: {
      type: "fade-up",
      delay: "200",
      duration: "1000",
      easing: "ease-in",
    },
  },
  {
    label: "Paintings",
    filter: ".Painting",
    animation: {
      type: "fade-up",
      delay: "300",
      duration: "1000",
      easing: "ease-in",
    },
  },
];

export { projects, buttons };
