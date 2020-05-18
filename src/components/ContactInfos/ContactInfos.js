import React from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import classes from "./ContactInfos.module.css";
import icons from "./data";

const contactInfos = () => (
  <div
    className={classes.ContactInfos}
    data-aos="fade-up"
    data-aos-delay="600"
    data-aos-duration="800"
    data-aos-easing="ease-in"
  >
    <h1 className={classes.Title}>Contact Infos</h1>
    {icons.map((icon) => (
      <ContactInfo
        link={icon.link}
        class={icon.class}
        color={icon.color}
        text={icon.text}
      />
    ))}
  </div>
);

export default contactInfos;
