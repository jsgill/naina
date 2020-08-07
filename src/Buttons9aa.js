import React from "react";

class Buttons9aa extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Click me" };
  }

  changeColor = () => {
    let color = this.state.color;
    if (color == "Click me") {
      color = "I am red";
    } else if (color == "I am red") {
      color = "you clicked again I am still red";
    } else if (color == "you clicked again I am still red") {
      color = "You are stupid clicking me again and again please stop";
    } else if (
      color == "You are stupid clicking me again and again please stop"
    ) {
      color = "एक बार और क्लिक किया तो देखलो कूट दूंगा ";
    } else if (color == "एक बार और क्लिक किया तो देखलो कूट दूंगा ") {
      color = "तुम तो निरे मूरख हो कंप्यूटर भी कभी कुटाई करते हैं क्या?";
    }
    this.setState({ color: color });
  };

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
      </div>
    );
  }
}

export default Buttons9aa;
