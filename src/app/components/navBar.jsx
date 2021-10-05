import React from "react";

const NavBar = () => {
  return (
    <ul className="main-menu">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/rooms">Rooms</a>
      </li>
      <li>
        <a href="/contacts">Contacts</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  );
};

export default NavBar;
