import React from "react";

class ButtonChallenge1aaaabbb extends React.Component {
  constructor() {
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
      player: { 1: "player 1", 2: "player 2" },
      sign: { 1: "X", 2: "O" },
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

    let cplayer = this.state.currentplayer;
    if (cplayer == "1") {
      cplayer = "2";
      //val = "X";
    } else if (cplayer == "2") {
      cplayer = "1";
      // val = "O";
    }
    val = this.state.sign[this.state.currentplayer];
    //winnner

    //winnner
    this.setState({ [nam]: val, currentplayer: cplayer });
    /* if (
      this.state.p00 === this.state.p01 &&
      this.state.p00 === this.state.p02 &&
      this.state.p00 != "-"
    ) {
      if ((this.state.p00 = "X"));
      {
        this.state.win = true;
        this.state.winner = "Player1";
      }
    } else this.state.p00 = "O";
    {
      this.state.win = true;
      this.state.winner = "Player2";
    }*/
    this.check();
  };
  check() {
    console.log("check called");

    // to check if the values match or not
    if (
      this.state.p00 === this.state.p01 &&
      this.state.p00 === this.state.p02 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p00 === this.state.p10 &&
      this.state.p10 === this.state.p20 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p11 === this.state.p01 &&
      this.state.p01 === this.state.p21 &&
      this.state.p01 != "-"
    ) {
      if (this.state.p11 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p02 === this.state.p12 &&
      this.state.p12 === this.state.p22 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p10 === this.state.p11 &&
      this.state.p11 === this.state.p12 &&
      this.state.p11 != "-"
    ) {
      if (this.state.p10 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p20 === this.state.p21 &&
      this.state.p21 === this.state.p22 &&
      this.state.p20 != "-"
    ) {
      if (this.state.p20 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p00 === this.state.p11 &&
      this.state.p11 === this.state.p22 &&
      this.state.p00 != "-"
    ) {
      if (this.state.p00 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    } else if (
      this.state.p02 === this.state.p11 &&
      this.state.p11 === this.state.p20 &&
      this.state.p02 != "-"
    ) {
      if (this.state.p02 === "X") {
        console.log("Player 1");
        this.setState({ win: true, winner: "Player 1" });
      } else {
        console.log("Player2");
        this.setState({ win: true, winner: "Player 2" });
      }
    }
  }
  render() {
    console.log("Render");
    return (
      <div>
        <div>
          <h1>Hi, I am ButtonChallenge component.</h1>
          <div>
            <button
              disabled={this.state.win || this.state.p00 != "-"}
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
              disabled={this.state.p01 != "-"}
              type="button"
              onClick={this.state.win || this.myClickHandler}
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
              disabled={this.state.win || this.state.p02 != "-"}
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
              disabled={this.state.win || this.state.p10 != "-"}
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
              disabled={this.state.win || this.state.p11 != "-"}
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
              disabled={this.state.win || this.state.p12 != "-"}
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
              disabled={this.state.win || this.state.p20 != "-"}
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
              disabled={this.state.win || this.state.p21 != "-"}
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
              disabled={this.state.win || this.state.p22 != "-"}
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

        {this.state.win && (
          <div>Congratulations {this.state.winner}. You WIN.</div>
        )}
      </div>
    );
  }
}

export default ButtonChallenge1aaaabbb;
