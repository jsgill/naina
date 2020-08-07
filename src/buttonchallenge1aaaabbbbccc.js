import React from "react";

class ButtonChallenge1aaaabbbbccc extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      p00: "-",
      p01: "-",
      p02: "-",
      p10: "-",
      p11: "-",
      p12: "-",
      p20: "-",
      p21: "-",
      p22: "-",
      currentplayer: "1",
      sign: { 1: "X", 2: "O" },
      player: { 1: "player 1", 2: "player 2" },
      win: false,
      winner: "",
      bgColor: "green",
    };
  }

  myClickHandler = (event) => {
    if (
      this.state.p00 === this.state.p01 &&
      this.state.p00 === this.state.p02 &&
      this.state.p00 != "-"
    ) {
      alert("Button color is to be red");
      this.setState({
        bgColor: "red",
      });
    }

    let nam = event.target.name;
    let val = this.state[nam];
    //alert("Button color is: " + nam);
    // alert("Button value is: " + val);

    // if (val == "-") {
    //   val = "X";
    // } else if (val == "X") {
    //   val = "O";
    // } else if (val == "O") {
    //   val = "X";
    // }
    console.log("event");
    let cplayer = this.state.currentplayer;
    if (cplayer == "1") {
      cplayer = "2";
      //val = "X";
    } else if (cplayer == "2") {
      cplayer = "1";
      // val = "O";
    }
    val = this.state.sign[this.state.currentplayer];

    this.setState({ [nam]: val, currentplayer: cplayer });
  };

  render() {
    let btstyle = {
      width: "150px",
      height: "60px",
      margin: "20px",
    };
    let wbtstyle = {
      backgroundColor: "blue",
      width: "150px",
      height: "60px",
      margin: "20px",
    };
    let w2btstyle = {
      backgroundColor: "red",
      width: "150px",
      height: "60px",
      margin: "20px",
    };
    console.log("render");
    let cwin = this.state.win;
    let cwinner = this.state.winner;
    if (
      this.state.p00 === this.state.p01 &&
      this.state.p00 === this.state.p02 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        cwin = true;
        btstyle = wbtstyle;
        cwinner = "Player 1";
      } else {
        cwin = true;
        btstyle = w2btstyle;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p00 === this.state.p10 &&
      this.state.p10 === this.state.p20 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        cwin = true;
        btstyle = wbtstyle;
        cwinner = "Player 1";
      } else {
        cwin = true;
        btstyle = w2btstyle;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p11 === this.state.p01 &&
      this.state.p01 === this.state.p21 &&
      this.state.p01 != "-"
    ) {
      if (this.state.p11 === "X") {
        cwin = true;
        btstyle = wbtstyle;
        cwinner = "Player 1";
      } else {
        cwin = true;
        btstyle = w2btstyle;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p02 === this.state.p12 &&
      this.state.p12 === this.state.p22 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        cwin = true;
        btstyle = wbtstyle;
        cwinner = "Player 1";
      } else {
        cwin = true;
        btstyle = w2btstyle;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p10 === this.state.p11 &&
      this.state.p11 === this.state.p12 &&
      this.state.p11 != "-"
    ) {
      if (this.state.p10 === "X") {
        cwin = true;
        cwinner = "Player 1";
        btstyle = wbtstyle;
      } else {
        cwin = true;
        cwinner = "Player 2";
        btstyle = w2btstyle;
      }
    } else if (
      this.state.p20 === this.state.p21 &&
      this.state.p21 === this.state.p22 &&
      this.state.p20 != "-"
    ) {
      if (this.state.p20 === "X") {
        cwin = true;
        cwinner = "Player 1";
        btstyle = wbtstyle;
      } else {
        cwin = true;
        cwinner = "Player 2";
        btstyle = w2btstyle;
      }
    } else if (
      this.state.p00 === this.state.p11 &&
      this.state.p11 === this.state.p22 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        cwin = true;
        cwinner = "Player 1";
        btstyle = wbtstyle;
      } else {
        cwin = true;
        cwinner = "Player 2";
        btstyle = w2btstyle;
      }
    } else if (
      this.state.p02 === this.state.p11 &&
      this.state.p11 === this.state.p20 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        cwin = true;
        cwinner = "Player 1";
        btstyle = wbtstyle;
      } else {
        cwin = true;
        cwinner = "Player 2";
        btstyle = w2btstyle;
      }
    }

    return (
      <div>
        {cwin && <div>Congratulations {cwinner}. You WIN.</div>}
        <div>
          console.log("return");
          <h1>Hi, I am ButtonChallenge component test.</h1>
          {cwin && <div>Congratulations {cwinner}. You WIN.</div>}
          <div>
            <button
              disabled={this.state.p00 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p00"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p00}
            </button>
            <button
              disabled={this.state.p01 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p01"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p01}
            </button>

            <button
              disabled={this.state.p02 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p02"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p02}
            </button>
          </div>
          <div>
            <button
              disabled={this.state.p10 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p10"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p10}
            </button>
            <button
              disabled={this.state.p11 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p11"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p11}
            </button>
            <button
              disabled={this.state.p12 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p12"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p12}
            </button>
          </div>
          <div>
            <button
              disabled={this.state.p20 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p20"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p20}
            </button>
            <button
              disabled={this.state.p21 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p21"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p21}
            </button>
            <button
              //disabled={this.state.p22 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p22"
              style={{
                backgroundColor: this.state.bgColor,
                ...btstyle,
              }}
            >
              {this.state.p22}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonChallenge1aaaabbbbccc;
