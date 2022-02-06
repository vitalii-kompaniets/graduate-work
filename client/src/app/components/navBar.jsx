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
            <Link className="nav-link" to="/bookedRooms">
              Забронированные номера
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/adminPanel">
              Админ
            </Link>
          </li>
        </ul>
  );
};

export default NavBar;
