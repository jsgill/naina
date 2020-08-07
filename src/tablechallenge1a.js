import React from "react";
//import React, { Component } from "react";
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 4,
      b: 5,
      c: null,
      tabledata: "",
      username: "",
      errormessage: "",
    };
    /*this.state = {
      username: "",
      age1: null,
      age2: null,
      errormessage: "",
    };*/
    tableparameter = () => {
      var i1 = this.state.a,
        i2 = this.state.b,
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
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "a") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    if (nam === "b") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <>
        <form>
          <h1>
            Hello {this.state.username} {this.state.age}
          </h1>
          <p>Enter your name:</p>
          <input type="text" name="username" onChange={this.myChangeHandler} />
          <p>Enter your age:</p>
          <input type="text" name="a" onChange={this.myChangeHandler} />
          {this.state.errormessage}
          <input type="text" name="b" onChange={this.myChangeHandler} />
          {this.state.errormessage}
        </form>
        <div>
          <h1>Hi, I am TableParameter component testing .</h1>
          <button type="button" onClick={this.tableparameter}>
            Print Table
          </button>
          Without HTML Tags:
          <br /> {this.state.tabledata} <br /> With HTML Tags:
        </div>
      </>
    );
  }
}
export default MyForm;
