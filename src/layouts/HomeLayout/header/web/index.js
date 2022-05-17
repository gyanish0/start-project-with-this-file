import React, { useContext } from "react";
import "./web.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../../context/User";

function Web() {
  const user = useContext(UserContext);
  return (
    <div className="web">
      <NavLink to="/" activeclassname="selected">
        Home
      </NavLink>
      <NavLink to="/about" activeclassname="selected">
        Internation
      </NavLink>
      <NavLink to="/byname" activeclassname="selected">
        search by name
      </NavLink>
      <NavLink to="/bypincode" activeclassname="selected">
        serach
      </NavLink>
      <NavLink to="/new" activeclassname="selected">
        New
      </NavLink>
    </div>
  );
}

export default Web;
