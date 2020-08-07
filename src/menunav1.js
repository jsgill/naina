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
import { Switch } from "react-router-dom";
import Navbar1 from "./pages/Navbar1";
import Navbar from "./pages/Navbar";
import "./index.css";
import MenuNav1_old from "./menunav1_old";
import Footer from "./pages/Footer";

const logo = "https://webmastershisar.com/wp-content/uploads/2017/03/wmh9.png";

class MenuNav1 extends React.Component {
  constructor() {
    super();
    this.state = { cshow: "None Component Showing" };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar1 />
          <Switch>
            <Route exact path="/" component={HOme} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />

            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default MenuNav1;
