import React, { Component } from "react";
import RRKEmitter from "./RRKEmitter";

export default class Subscriber extends Component {
  constructor() {
    super();
    this.subscription = null;
  }

  componentWillMount() {
    this.subscription = RRKEmitter.addListener("onButtonClick", data => {
      this.doSomething(data);
    });
  }

  doSomething = (message) => {
    alert(message + ' from Subscriber');
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return <div>Subscriber</div>;
  }
}
