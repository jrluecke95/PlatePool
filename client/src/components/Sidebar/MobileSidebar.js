import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.css'

export default function props() {
  return (

      <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/profile">
        UserProfile
      </a>

      <a className="menu-item" href="/CreatePlate">
        CreatePlate
      </a>

      
    </Menu>
  );
};
