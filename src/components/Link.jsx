import React from "react";

const Link = ({ children, onClick, className }) => {
  return (
    <span
      className={`${className} text-[var(--color-primary)] font-bold  mr-2 hover:underline cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Link;
