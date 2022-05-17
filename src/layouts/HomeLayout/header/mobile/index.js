import React from "react";
import { NavLink } from "react-router-dom";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <NavLink to="/" activeclassname="selected">
            Home
          </NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/about" activeclassname="selected">
            Internation
          </NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/byname" activeclassname="selected">
            search by name
          </NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/bypincode" activeclassname="selected">
            serach
          </NavLink>
        </div>
        <div className="mobile-option">
          <NavLink to="/new" activeclassname="selected">
            New
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
