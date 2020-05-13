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
    height: "l",
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
    height: "m",
  },
  {
    source: `${images["project6.jpg"]}`,
    alt: "alt6",
    href: "https://www.google.com",
    category: "Installation",
    height: "xs",
  },
];

export { projects };
