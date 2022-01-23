import React from "react";
import { Link } from "react-router-dom";
import menu from "../config/menu";

const Navigation = () => {
  return (
    <nav>
      <ul>
        {menu.map(({ name, path }) => (
          <Link key={path} style={{ marginLeft: 12 }} to={path}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
