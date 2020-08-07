import React from "react";

class Table extends React.Component {
  constructor() {
    super();
    this.state = { a: 4, b: 5, c: null };
  }

  sum = () => {
    var a = this.state.a,
      b = this.state.b,
      c = this.state.c;
    c = a + b;
    this.setState({ c: c });
  };

  render() {
    return (
      <div>
        <h1>Hi, I am table component.</h1>
        <h2>
          a[{this.state.a}] + b[{this.state.b}] = c [{this.state.c}]
        </h2>
        <button type="button" onClick={this.sum}>
          a + b
        </button>
      </div>
    );
  }
}

export default Table;
