import React, { useState } from "react";

const Play = ({ start }) => {
  const [onHover, setOnHover] = useState({
    color: "#A445ED",
    opacity: ".25",
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      className="transition-all duration-[4s] cursor-pointer"
      viewBox="0 0 75 75"
      onMouseEnter={() => setOnHover({ color: "#fff", opacity: "1" })}
      onMouseLeave={() => setOnHover({ color: "#A445ED", opacity: ".25" })}
      onClick={start}
    >
      <g fill="#A445ED" fill-rule="evenodd">
        <circle cx="37.5" cy="37.5" r="37.5" opacity={onHover.opacity} />
        <path d="M29 27v21l21-10.5z" fill={onHover.color} />
      </g>
    </svg>
  );
};

export default Play;
