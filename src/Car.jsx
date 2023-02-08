import React, { Component } from "react";
import { UserContext } from "./UserContext";
class Car extends Component {
  // UserContext
  static contextType = UserContext;
  //
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      price: 60000,
    };
  }
  changeColor = () => {
    this.setState({ color: "red" });
  };
  changeYear = () => {
    console.log("this", this);
    this.setState({ year: 2010 });
  };
  componentDidMount() {
    // console.log("this component mounted");
    // console.log(this.state, this.props);
    this.setState({ color: "yellow" });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
    console.log("shouldComponentUpdate", nextProps, nextState);
    if (nextState.year < 1986 === this.state.year < 1986) {
      console.log("dont update");
      return false;
    }
    console.log("do update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.color !== this.state.color) {
      if (this.state.color === "red") {
        this.setState({ price: this.state.price * 1.1 });
      } else if (prevState.color === "red") {
        this.setState({ price: this.state.price / 1.1 });
      }
    }
    return null;
  }
  componentDidUpdate() {
    console.log("hello");
  }

  componentWillUnmount() {
    // console.log("unmounted");
  }
  render() {
    // access context value
    // console.log("context", this.context.username);
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year < 1986 ? "Before 1986" : "After 1985"}. Cost is{" "}
          {this.state.price}
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        <button onClick={this.changeYear}>Change year</button>
      </div>
    );
  }
}

export default Car;
