import React from "react";
function Square(props) {
  return (
    <button className="Square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculaterWinner(squares) || squares[i]) {
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
    const Winner = calculaterWinner(this.state.squares);
    let status;
    if (Winner) {
      status = "Winner:" + Winner;
    } else {
      status = "Next Player:" + (this.state.xIsNext ? "x" : "o");
    }

    return (
      <>
        <div className="status">{status}</div>
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

class Tik extends React.Component {
  render() {
    return (
      <>
        <div className="game">
          <div className="game_border">
            <Board />
          </div>
          <div className="game-info">
            <div>{/*status */}</div>
            <ol>{/* TODO*/}</ol>
          </div>
        </div>
      </>
    );
  }
}

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

export default Tik;
