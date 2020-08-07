import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import ButtonChallenge1 from "./buttonchallenge1.js";
import Game1 from "./Game1";
import Game from "./Game";
import TicTacToeGameTask1 from "./tictactoegame-task1.js";
import Game3 from "./Game3";
import Tictac from "./tictac";
import ButtonChallenge1aaaabbbbcccc from "./buttonchallenge1aaaabbbbcccc";
import HOme from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
//import Navbar1 from "./pages/Navbar1.jsx";
//import Navbar from "./pages/Navbar.jsx";
import Common from "./pages/Common.jsx";
import { Switch } from "react-router-dom";
import Navbar1 from "./pages/Navbar1";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import Test4 from "./pages/Test4";
import Footer from "./pages/Footer";
import StickyFooter from "react-sticky-footer";

const logo = "https://webmastershisar.com/wp-content/uploads/2017/03/wmh9.png";
const web = "https://webmastershisar.com/wp-content/uploads/2017/03/wmh9.png";

class MenuNav1_old extends React.Component {
  constructor() {
    super();
    this.state = { cshow: "" };
  }

  myClickHandler = (event) => {
    let nam = event.target.name;
    let cshow = null;
    //alert("Button Component Is: " + nam);
    switch (nam) {
      case "Test1":
        cshow = <Test1 />;
        break;
      case "Test2":
        cshow = <Test2 />;
        break;
      case "Test3":
        cshow = <Test3 />;
        break;
      case "Test4":
        cshow = <Test4 />;
        break;
    }
    this.setState({ cshow: cshow });
  };

  render() {
    return (
      <div>
        <div className="header-img">
          <h1 className="header-logo">GTS</h1>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Test1"
            style={{
              backgroundColor: "lightblue",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            Home <br />
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Test2"
            style={{
              backgroundColor: "lightyellow",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            About
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Test3"
            style={{
              backgroundColor: "lightpink",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            Service
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Test4"
            style={{
              backgroundColor: "lightpink",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            Contact
          </button>
        </div>
        <div>{this.state.cshow}</div>
        <div>
          Gill Telecom Service is a ‘Complete Technology Resource’ for
          residential and small to medium business customers.
        </div>
        <Footer />
      </div>
    );
  }
}

export default MenuNav1_old;
