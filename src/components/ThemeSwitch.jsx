import React, { useState } from "react";
// import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMood";
const ThemeSwitch = ({ onClick }) => {
  const [theme, setTheme] = useDarkMode();

  const [checked, setChecked] = useState(theme === "light" ? false : true);

  // changing the color on hover on the svg
  const [onHover, setOnHover] = useState({
    color: "#A445ED",
  });

  const toggleTheme = (e) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setChecked(!checked);
  };
  return (
    <div className="flex justify-center items-center">
      <label id="switch" className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={toggleTheme}
          id="slider"
        />
        <span className="slider round"></span>
      </label>
      {/* Moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="ml-2"
        onMouseEnter={() => setOnHover({ color: "#A445ED" })}
        onMouseLeave={() => setOnHover({ color: "#838383" })}
      >
        <path
          fill="none"
          stroke={onHover.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
        />
      </svg>
    </div>
  );
};

export default ThemeSwitch;
