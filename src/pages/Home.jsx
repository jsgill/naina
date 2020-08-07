import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";
import web from "./images/web-designe.jpg";
//const web =
// "https://webmastershisar.com/wp-content/uploads/2017/03/web-designe.jpg";

const HOme = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};
export default HOme;
