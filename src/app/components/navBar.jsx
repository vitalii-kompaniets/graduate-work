import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="main-menu">
      <li>
        <Link className="nav-link" aria-current="page" to="/">
          Главная
        </Link>
      </li>
      <li>
        <Link className="nav-link" aria-current="page" to="/rooms">
          Доступные номера
        </Link>
      </li>
      <li>
        <Link className="nav-link" aria-current="page" to="/bookedRooms">
          Забронированные номера
        </Link>
      </li>
      <li>
        <Link className="nav-link" aria-current="page" to="/adminPanel">
          Админ
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
