import React from "react";

const Squares = {
  background: "white",
  marginRight: "-1px",
  marginTop: "1px",
  padding: "0",
  width: " 80px",
  height: "80px",
  textAlign: "center",
  fontSize: "40px",
  fontWeight: "bold",
  lineHeight: "80px",
  display: "inline-block",
  textDecoration: "none",
  backgroundColor: "darkolivegreen",
  color: "#fff",
  margin: "10px",
  borderRadius: "5px",
  textShadow: "0px -1px 0px rgba(0,0,0,.5)",
  float: "left",
};
const GameInfo = {
  position: "absolute",
  top: "-30px",
};
const Game = {
  position: "absolute",
  top: "56%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  flexDirection: "row",
  margin: "0 auto",
};

const Main = {
  width: "14%",
  margin: "auto",
  marginTop: "7%",
  lineHeight: "27px",
  fontSize: "20px",
};

function Square1(props) {
  return (
    <button style={Squares} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board1 extends React.Component {
  renderSquare(i) {
    return (
      <Square1
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <>
        <div className="border-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div className="border-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div className="border-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </>
    );
  }
}
class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumber: 0,
      player1: null,
      player2: null,

      histry: [{ squares: Array(9).fill(null) }],
    };
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  hendleClick(i) {
    const histry = this.state.histry.slice(0, this.state.stepNumber + 1);
    const current = histry[histry.length - 1];
    const squares = current.squares.slice();
    const winner = calculate(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? " X" : "O ";
    this.setState({
      histry: histry.concat({
        squares: squares,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: histry.length,
    });
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    const status =
      "Next Player is " +
      (this.state.xIsNext
        ? this.state.player1 + "  X"
        : this.state.player2 + "  O");
    const histry = this.state.histry;
    const current = histry[this.state.stepNumber];

    return (
      <>
        <div style={Main}>
          <div>
            <label>Enter First Player Name</label>
            <br />
            <input type="text" name="player1" onChange={this.myChangeHandler} />
            <br />
          </div>
          <div>
            <label>Enter Second Player Name</label>
            <br />
            <input type="text" name="player2" onChange={this.myChangeHandler} />
          </div>

          <div> first plyer:{this.state.player1}</div>
          <div>second player:{this.state.player2}</div>
        </div>

        <div style={Game}>
          <div>
            <Board1
              onClick={(i) => this.hendleClick(i)}
              squares={current.squares}
            />
          </div>
          <div style={GameInfo}>
            <div style={{ marginLeft: "62px" }}>{status}</div>
          </div>
        </div>
      </>
    );
  }
}

function calculate() {
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
export default Players;
