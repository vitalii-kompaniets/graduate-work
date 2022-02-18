import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="nav-menu">
      <li>
        <Link className="nav-link" to="/">
          Главная
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/rooms">
          Доступные номера
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/favouritesRooms">
          Избранные номера
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/users">
          Пользователи
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
