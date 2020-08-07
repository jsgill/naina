import React from "react";
import Box from "./Box";
//import './Tik.css'

const Game = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "40%",
  marginTop: "10%",
};

const squareGame = {
  background: "#a93f5c",
  border: "1px solid black",
  float: "left",
  fontSize: "50px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "80px",
  margin: "4px",
  padding: "10px",
  textAlign: "center",
  width: "80px",
  color: "#fff",
};

function Square(props) {
  return (
    <button style={squareGame} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: null,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculater(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "x" : "o";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  rendersquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const status =
      "Next Player:" + (this.state.xIsNext ? "manisha x" : "babita o");
    return (
      <>
        <div>{status}</div>
        <div className="border-row">
          {this.rendersquare(0)}
          {this.rendersquare(1)}
          {this.rendersquare(2)}
        </div>
        <div className="border-row">
          {this.rendersquare(3)}
          {this.rendersquare(4)}
          {this.rendersquare(5)}
        </div>
        <div className="border-row">
          {this.rendersquare(6)}
          {this.rendersquare(7)}
          {this.rendersquare(8)}
        </div>
      </>
    );
  }
}

class Tik2 extends React.Component {
  render() {
    return (
      <>
        <div style={Game}>
          <div>
            <Board />
          </div>
        </div>
      </>
    );
  }
}

function calculater() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    return null;
  }
}

export default Tik2;
