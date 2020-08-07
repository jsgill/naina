import React from "react";

const Game = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "40%",
  marginTop: "10%",
};

const winnerBox = {
  color: "red",
};

const squareGame = {
  background: "#a93f5c",
  border: "1px solid black",
  float: "left",
  fontSize: "50px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "90px",
  margin: "4px",
  padding: "10px",
  textAlign: "center",
  width: "90px",
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
      player1: "",
      player2: "",
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculaterWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
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
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  /*
  render() {
    const status =
      "Next Player is " +
      (this.state.xIsNext
        ? this.state.player1 + "  X"
        : this.state.player2 + "  O");*/
  //render
  render() {
    const Winner = calculaterWinner(this.state.squares);
    let status;
    if (Winner) {
      status =
        "Winner :  " +
        (this.state.xIsNext
          ? this.state.player1 + "  -   "
          : this.state.player2 + "  -   ") +
        Winner;
    } else {
      status =
        "Next Player:  " +
        (this.state.xIsNext
          ? this.state.player1 + "  -  X"
          : this.state.player2 + "  -  O");
    }

    //return

    return (
      <>
        <form>
          <p>Player1: {this.state.player1}</p>
          <input type="text" name="player1" onChange={this.myChangeHandler} />

          <p>Player2: {this.state.player2}</p>
          <input type="text" name="player2" onChange={this.myChangeHandler} />
        </form>
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

class Box extends React.Component {
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

//Funciton calculaterWinner start
function calculaterWinner(squares) {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//Funciton calculaterWinner End
/*
function calculaterWinner() {
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
*/

export default Box;
