import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/index";
import Web from "./web/index";
import { useNavigate } from "react-router";
import { RenderIf } from "../../../components/RenderIf";
import { FaRegTimesCircle } from "react-icons/fa";
import Hamburger from "hamburger-react";
function Header() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };
  window.onscroll = function () {
    setIsOpen(false);
  };
  return (
    <div className="header">
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <Hamburger />
          </div>

          <RenderIf isTrue={isOpen}>
            <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
          </RenderIf>
        </div>
      </div>
    </div>
  );
}

export default Header;
