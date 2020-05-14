import { importAllImages } from "../../utility";

const images = importAllImages(
  require.context(
    "../../assets/images/testimonials",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const testimonials = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: `${images["testimonial1.png"]}`,
    imgAlt: "testimonial 1",
    name: "Harry Bean",
    title: "Professional Wizard",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: `${images["testimonial2.png"]}`,
    imgAlt: "testimonial 2",
    name: "John Doe",
    title: "World Class Dancer",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: `${images["testimonial3.png"]}`,
    imgAlt: "testimonial 3",
    name: "Brad Pitt",
    title: "Instagram Model",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imgSrc: `${images["testimonial4.png"]}`,
    imgAlt: "testimonial 4",
    name: "Jesus Christ",
    title: "5 Star Rated God",
  },
];

export default testimonials;
