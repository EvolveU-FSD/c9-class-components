import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const Header = (props) => {
  const { username } = useContext(UserContext);
  console.log("in the header, username is", username);
  useEffect(() => {
    console.log("this component, header, mounted");
  }, []);
  // const [state, setState] = useState({ name: "Danielle", color: "Blue" });
  // setState({ color: "Green" });
  return <div>This is the header</div>;
};

export default Header;
