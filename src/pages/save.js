const { Dropdown } = require("bootstrap/dist/js/bootstrap.bundle");

<div className="container-fluid nav_bg">
  <div className="row">
    <div className="col-10 mx-auto"></div>
  </div>
</div>;
//footer
import React from "react";

var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { cshow: "None Component Showing" };
  }

  render() {
    return (
      <div>
        <div style={phantom} />
        <div style={style}>{/*children*/}</div>
      </div>
    );
  }
}

export default Footer;

//footer end

//click handler function code

   myClickHandler = (event) => {
    let nam = event.target.name;
    let cshow = null;
    //alert("Button Component Is: " + nam);
    switch (nam) {
      case "Tictac":
        cshow = <Tictac />;
        break;
      case "TicTacToeGameTask1":
        cshow = <TicTacToeGameTask1 />;
        break;
      case "ButtonChallenge1":
        cshow = <ButtonChallenge1 />;
        break;
      case "Home":
        cshow = <HOme />;
        break;
      case "Game":
        cshow = <Game />;
        break;
      case "Game3":
        cshow = <Game3 />;
        break;
    }
    this.setState({ cshow: cshow });
  };
// click handler function end

//menunav1_old buttons

<button
            type="button"
            onClick={this.myClickHandler}
            name="Game"
            style={{
              backgroundColor: "lightblue",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            Game.js <br /> (Date: 7 July 2020)
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Game1"
            style={{
              backgroundColor: "lightyellow",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            Game1.js <br /> (Date: 7 July 2020)
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Home"
            style={{
              backgroundColor: "lightpink",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            HOme.jsx <br /> (Date: 7 July 2020)
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="Tictac"
            style={{
              backgroundColor: "lightpink",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            tictac.js <br /> (Date: 8 July 2020)
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="TicTacToeGameTask1"
            style={{
              backgroundColor: "teal",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            tictactoegame-task1.js <br /> (Date: 7 July 2020)
          </button>
          <button
            type="button"
            onClick={this.myClickHandler}
            name="ButtonChallenge1"
            style={{
              backgroundColor: "teal",
              width: "150px",
              height: "60px",
              margin: "20px",
            }}
          >
            ButtonChallenge1.js <br /> (Date: 4 July 2020)
          </button>

          // buttons backup end

          // search form code start
          <form class="d-flex">
                    <input
                      class="form-control mr-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>

                  //search form code end
                  // disabled code start
                  <li class="nav-item">
                      <a
                        class="nav-link disabled"
                        href="#"
                        tabindex="-1"
                        aria-disabled="true"
                      >
                        Disabled
                      </a>
                    </li>

                    //disabled code end

                    //drop dwon code start
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Dropdown
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    //dropdown code end


