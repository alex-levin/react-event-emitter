import React, { Component } from "react";
import RRKEmitter from "./RRKEmitter";

export default class Publisher extends Component {
  handleClick = () => {
    RRKEmitter.emit("onButtonClick", "Hello");
  };

  render() {
    return (
      <div>
        Publisher:
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
