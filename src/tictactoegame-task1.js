import React from "react";

class TicTacToeGameTask1 extends React.Component {
  constructor() {
    super();
    this.state = {
      pos00: "-",
      pos01: "-",
      pos02: "-",
      pos10: "-",
      pos11: "-",
      pos12: "-",
      pos20: "-",
      pos21: "-",
      pos22: "-",
    };
  }

  myClickHandler = (event) => {
    let nam = event.target.name;
    let val = this.state[nam];

    //alert("Button position is: " + nam);
    if (val == "-") {
      val = "X";
    } else if (val == "X") {
      val = "O";
    } else if (val == "O") {
      val = "X";
    } else {
      alert(
        "Program has encountered some error, please check if else statements."
      );
    }
    this.setState({ [nam]: val });
  };

  render() {
    const btstyle = {
      width: "80px",
      height: "60px",
      margin: "5px",
      fontFamily: "Arial",
      color: "white",
      fontWeight: "bold",
      fontSize: "30px",
    };

    return (
      <div>
        <h1>Hi, I am Tic Tac Toe game component.</h1>
        <div>
          <button
            name="pos00"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "red", ...btstyle }}
          >
            {this.state.pos00}
          </button>
          <button
            name="pos01"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "blue", ...btstyle }}
          >
            {this.state.pos01}
          </button>
          <button
            name="pos02"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "green", ...btstyle }}
          >
            {this.state.pos02}
          </button>
        </div>
        <div>
          <button
            name="pos10"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "teal", ...btstyle }}
          >
            {this.state.pos10}
          </button>
          <button
            name="pos11"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "orange", ...btstyle }}
          >
            {this.state.pos11}
          </button>
          <button
            name="pos12"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "purple", ...btstyle }}
          >
            {this.state.pos12}
          </button>
        </div>
        <div>
          <button
            name="pos20"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "magenta", ...btstyle }}
          >
            {this.state.pos20}
          </button>
          <button
            name="pos21"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "skyblue", ...btstyle }}
          >
            {this.state.pos21}
          </button>
          <button
            name="pos22"
            type="button"
            onClick={this.myClickHandler}
            style={{ backgroundColor: "brown", ...btstyle }}
          >
            {this.state.pos22}
          </button>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default TicTacToeGameTask1;
