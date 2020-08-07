import React from "react";

class ButtonChallenge1aaaabbbbc extends React.Component {
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
    };
  }

  myClickHandler = (event) => {
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
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p00 === this.state.p10 &&
      this.state.p10 === this.state.p20 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p11 === this.state.p01 &&
      this.state.p01 === this.state.p21 &&
      this.state.p01 != "-"
    ) {
      if (this.state.p11 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p02 === this.state.p12 &&
      this.state.p12 === this.state.p22 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
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
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p20 === this.state.p21 &&
      this.state.p21 === this.state.p22 &&
      this.state.p20 != "-"
    ) {
      if (this.state.p20 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p00 === this.state.p11 &&
      this.state.p11 === this.state.p22 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    } else if (
      this.state.p02 === this.state.p11 &&
      this.state.p11 === this.state.p20 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        cwin = true;
        cwinner = "Player 1";
      } else {
        cwin = true;
        cwinner = "Player 2";
      }
    }

    return (
      <div>
        {cwin && <div>Congratulations {cwinner}. You WIN.</div>}
        <div>
          console.log("return");
          <h1>Hi, I am ButtonChallenge component.</h1>
          {cwin && <div>Congratulations {cwinner}. You WIN.</div>}
          <div>
            <button
              disabled={this.state.p00 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p00"
              style={{
                backgroundColor: "red",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "blue",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "green",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "teal",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "orange",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "purple",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "yellow",
                width: "150px",
                height: "60px",
                margin: "20px",
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
                backgroundColor: "skyblue",
                width: "150px",
                height: "60px",
                margin: "20px",
              }}
            >
              {this.state.p21}
            </button>
            <button
              disabled={this.state.p22 != "-" || cwin === true}
              type="button"
              onClick={this.myClickHandler}
              name="p22"
              style={{
                backgroundColor: "brown",
                width: "150px",
                height: "60px",
                margin: "20px",
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

export default ButtonChallenge1aaaabbbbc;
