import React from "react";

class ButtonChallenge1a extends React.Component {
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
    };
  }

  myClickHandler = (event) => {
    let nam = event.target.name;
    let val = this.state[nam];
    //alert("Button color is: " + nam);

    if (val == "-") {
      val = "X";
    } else if (val == "X") {
      val = "O";
    } else if (val == "O") {
      val = "X";
    }
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <h1>Hi, I am ButtonChallenge component.</h1>
        <div>
          <button
            disabled={this.state.p00 != "-"}
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
            disabled={this.state.p02 != "-"}
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
            disabled={this.state.p10 != "-"}
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
            disabled={this.state.p11 != "-"}
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
            disabled={this.state.p12 != "-"}
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
            disabled={this.state.p20 != "-"}
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
            disabled={this.state.p21 != "-"}
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
            disabled={this.state.p22 != "-"}
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
    );
  }
}

export default ButtonChallenge1a;
