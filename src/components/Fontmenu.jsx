import React, { useState } from "react";
import useFontChange from "../hooks/useFontChange";

const FontMenu = () => {
  const [font, setFont] = useFontChange();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    {
      value: "font-serif",
      label: "Sans Serif",
    },
    {
      value: "font-sans",
      label: "Serif",
    },
    {
      value: "font-mono",
      label: "Mono",
    },
  ];

  const handleFontChange = (newFont) => {
    setFont(newFont);
    setIsDropdownOpen(false);
  };
  return (
    <div className=" relative inline-block rounded-sm dark:text-[var(--white-color)] dark:bg-[var(--black-color)] border-none">
      <div
        className="w-full flex justify-between dark:text-[var(--white-color)]  dark:bg-[var(--black-color)] items-center py-[10px] px-5 m-0 text-[16px] font-bold leading-[1.3] bg-white   rounded-sm cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {font}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          className="ml-3"
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-width="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>
      {isDropdownOpen && (
        <ul
          className={`absolute top-full left-0 right-0 p-0 m-0 text-[16px] font-bold leading-[1.3] bg-white rounded-sm list-none z-10 focus:shadow-lg focus:shadow-[var(--color-primary)] dark:text-[var(--white-color)] dark:bg-[var(--black-color)] ${
            isDropdownOpen ? "shadow-lg shadow-[var(--color-primary)]" : ""
          }`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleFontChange(option.value)}
              className={`hover:!text-[var(--color-primary)] block py-[10px] px-5 cursor-pointer `}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FontMenu;
