import React  from "react";
import "./Header.scss";
import CityLink from "../CityLink/CityLink";

const Header = () => {
  return (
    <header className="header">
      <CityLink
        city="/saint-petersburg"
        isActive={(match, location) => match || location.pathname === "/"}
      >
        Saint-Petersburg
      </CityLink>
      <CityLink city="/moscow">Moscow</CityLink>
      <CityLink city="/rostov-on-don">Rostov-On-Don</CityLink>
    </header>
  );
};

export default Header;
