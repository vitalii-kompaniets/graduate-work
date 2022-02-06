import React from "react";
import imgLogo from "../img/logo1.png";
import NavBar from "./navBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="inner-header">
          <div className="logo">
            <img src={imgLogo} alt="RELAX HOTEL & SPA" />
          </div>
          <nav>
            <NavBar />
          </nav>
          <div className="nav-right">
            <Link className="nav-link" to="/login">
              <button className="btn btn-big">Вход/Регистрация</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
