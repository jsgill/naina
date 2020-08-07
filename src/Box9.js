import React from "react";

const Game = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "40%",
  marginTop: "10%",
};

const square = {
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
    <button style={square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(),
      xIsNext: null,
    };
  }

  handleChange(i) {
    const squares = this.state.squares.slice();

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
        onClick={() => this.handleChange(i)}
      />
    );
  }
  render() {
    const status = "Next Player: " + (this.state.xIsNext ? "x" : "o");
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

class Box9 extends React.Component {
  render() {
    return (
      <>
        <div style={Game}>
          <div className="game_border">
            <Board />
          </div>
          <div className="game_info"></div>
        </div>
      </>
    );
  }
}

export default Box9;
