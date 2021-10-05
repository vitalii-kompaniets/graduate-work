import React from "react";
import NavBar from "./navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Rooms from "./rooms";
import Contacts from "./contacts";
import About from "./about";

const Header = () => {
  return (
    <>
      <header className="header-section">
        <div className="inner-header">
          <div className="logo">
            <img src="./img/logo1.png" alt="RELAX HOTEL & SPA" />
          </div>
          <nav className="navigation">
            <NavBar />
            <div className="nav-right">
              <button className="btn">Вход</button>
              <button className="btn-big">Регистрация</button>
            </div>
          </nav>
        </div>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default Header;
