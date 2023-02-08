import React, { Component } from "react";
import Header from "./Header";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.firstName + " " + props.lastName,
    };
  }
  render() {
    // const { name } = this.props;
    return (
      <div>
        <Header />
        <h2>State name{this.state.name}</h2>
        {/* <h2>Prop name{name}</h2> */}
      </div>
    );
  }
}

export default Profile;
