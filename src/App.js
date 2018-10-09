import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

// A react component which renders
// a circle that changes color each second
// from red -> green -> blue -> red and so on.

class Circle extends React.Component {
  constructor() {
    super();
    this.state = {
      color: ["red", "black", "blue", "pink"],
      currentColor: "green",
      iterator: 0
    };
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    this.divyanshu = setInterval(() => {
      this.changeColor();
    }, 1000);
  }
  componentDidUpdate() {
    console.log("updated");
  }
  changeColor() {
    let { color } = this.state;
    let { iterator } = this.state;
    if (iterator === color.length) {
      // clearInterval(this.divyanshu);
      this.setState({ currentColor: color[iterator], iterator: 0 });
    } else {
      this.setState({ currentColor: color[iterator], iterator: iterator + 1 });
    }
  }
  componentWillUnmount() {
    clearInterval(this.divyanshu);
  }
  render() {
    return (
      <div>
        <div
          className="circle"
          style={{ backgroundColor: this.state.currentColor }}
        />
      </div>
    );
  }
}

export default Circle

