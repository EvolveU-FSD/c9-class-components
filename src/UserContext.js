import React, { Component, createContext } from "react";
export const UserContext = createContext();
export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "Bob" };
  }
  render() {
    const children = this.props.children;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
    );
  }
}

export default UserProvider;
