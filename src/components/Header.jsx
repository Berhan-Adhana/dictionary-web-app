import React from "react";
import Logo from "../assets/images/logo.svg";
const Header = ({ children }) => {
  return (
    <header className="flex justify-between w-[95%] items-center mx-auto mb-4 pt-2">
      <img src={Logo} alt="" />
      <div className="flex gap-x-2">{children}</div>
    </header>
  );
};

export default Header;
