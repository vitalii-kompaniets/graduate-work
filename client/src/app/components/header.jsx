import React from "react";
import imgLogo from "../img/logo1.png";
import NavBar from "./navBar";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="inner-header">
          <div className="logo">
            <img src={imgLogo} alt="RELAX HOTEL & SPA" />
          </div>
          <nav className="navigation">
            <NavBar />
          </nav>
          <div className="nav-right">
            <button className="btn">Вход</button>
            <button className="btn-big">Регистрация</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
