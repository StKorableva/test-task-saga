import React from "react";
import { NavLink } from "react-router-dom";

const CityLink = ({ city, isActive, children }) => (
  <NavLink
    className = 'header-item'
    to={city}
    isActive={isActive}
    activeStyle={{
      color: "red"
    }}
  >
    {children}
  </NavLink>
);
export default CityLink;
