import React from "react";

class Buttons9aaa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "X",
      color2: "X",
    };
  }

  changeColor = () => {
    let color = this.state.color;
    if (color == "X") {
      color = "O";
    } else if (color == "O") {
      color = "X";
    }

    this.setState({ color: color });
  };
  //---color 2

  changeColor2 = () => {
    let color2 = this.state.color2;
    if (color2 == "X") {
      color2 = "O";
    } else if (color2 == "O") {
      color2 = "X";
    }
    this.setState({ color2: color2 });
  };

  //-- color 2

  render() {
    return (
      <div>
        <button
          type="button"
          style={{
            backgroundColor: "red",
            width: "250px",
            height: "160px",
            margin: "20px",
          }}
          onClick={this.changeColor}
        >
          {this.state.color}
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "blue",
            width: "250px",
            height: "160px",
            margin: "20px",
          }}
          onClick={this.changeColor2}
        >
          {this.state.color2}
        </button>
      </div>
    );
  }
}

export default Buttons9aaa;
