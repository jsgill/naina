import React from "react";
//import React, { Component } from "react";

class TableParameter2 extends React.Component {
  constructor() {
    super();
    this.state = { valueA: 400, valueB: 500, tabledata: "" };
  }

  tableparameter = () => {
    var i1 = this.state.valueA,
      i2 = this.state.valueB,
      tabledata = "";

    for (let i = i1; i <= i2; i++) {
      tabledata += "-";
      tabledata += " <br /> ";
      for (let j = 1; j <= 10; j++) {
        if ((j * i) % 2 === 1) tabledata += "(Odd)";
        else tabledata += "(Even)";
        tabledata += i * j;
        tabledata += "      ";
      }
    }

    this.setState({ tabledata: tabledata });
  };

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <h1>Hi, I am TableParameter component.</h1>
        <div>
          <p>Enter First Value A:</p>
          <input type="text" name="valueA" onChange={this.myChangeHandler} />
          <p>Enter Second Value B:</p>
          <input type="text" name="valueB" onChange={this.myChangeHandler} />
        </div>
        <button type="button" onClick={this.tableparameter}>
          Print Table
        </button>
        <div>With HTML Tags:</div>
        <div dangerouslySetInnerHTML={{ __html: this.state.tabledata }} />
      </div>
    );
  }
}

export default TableParameter2;
