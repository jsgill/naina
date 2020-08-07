import React from "react";

class Football extends React.Component {
  red() {
    alert("I am red!");
  }
  blue() {
    alert("I am blue!");
  }
  yellow() {
    alert("I am yellow!");
  }

  purple() {
    alert("I am purple!");
  }
  pink() {
    alert("I am pink!");
  }
  orange() {
    alert("I am orange!");
  }
  lightblue() {
    alert("I am lightblue!");
  }
  white() {
    alert("I am white!");
  }
  grey() {
    alert("I am grey!");
  }
  render() {
    return (
      <>
        <button
          onClick={this.myClickHandler}
          name="red"
          style={{
            backgroundColor: "red",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.red}
        >
          Check I am red!
        </button>
        <button
          style={{
            backgroundColor: "blue",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.blue}
        >
          Check I am blue!
        </button>
        <button
          style={{
            backgroundColor: "Yellow",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.yellow}
        >
          Check I am Yellow!
        </button>
        <button
          style={{
            backgroundColor: "purple",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.purple}
        >
          Check I am purple!
        </button>
        <button
          style={{
            backgroundColor: "pink",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.pink}
        >
          Check I am pink!
        </button>
        <button
          style={{
            backgroundColor: "orange",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.orange}
        >
          Check I am orange!
        </button>
        <button
          style={{
            backgroundColor: "lightblue",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.lightblue}
        >
          Check I am lighblue!
        </button>
        <button
          style={{
            backgroundColor: "grey",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.grey}
        >
          Check I am grey!
        </button>
        <button
          style={{
            backgroundColor: "white",
            width: "150px",
            height: "60px",
            margin: "20px",
          }}
          onClick={this.white}
        >
          Check I am white!
        </button>
      </>
    );
  }
}
export default Football;
