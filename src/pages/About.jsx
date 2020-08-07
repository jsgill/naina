import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";
import web from "./images/web-947271.jpg";
//const web =
// "https://webmastershisar.com/wp-content/uploads/2016/06/web-947271.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
