import React from "react";
import SearchIcon from "../assets/images/icon-search.svg";

const Input = ({ word, handleInputChange, err, searchWord, className }) => {
  return (
    <form
      action=""
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="relative  dark:bg-[var(--black-variant-color)]">
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Search for any word... "
          className={`${className} caret-[var(--color-primary)] w-full  bg-[var(--lighter-gray-color)] p-4  rounded-lg outline-none border-none focus:outline-[var(--color-primary)] dark:bg-[var(--black-variant-color)] dark:text-[var(--white-color)] `}
          //   className="w-full  bg-[var(--lighter-gray-color)] p-4  rounded-lg outline-none border-none focus:outline-[var(--color-primary)]
          // dark:bg-[var(--black-variant-color)] dark:text-[var(--white-color)] caret-[var(--color-primary)]"
        />
        {/* {err ? (
          <span className="text-red-500   text-left">
            Whoops, can’t be empty…
          </span>
        ) : (
          ""
        )} */}
        <img
          src={SearchIcon}
          alt="Search icon"
          onClick={searchWord}
          className="absolute right-8 top-5 bg-red w-4 h-4 "
        />
      </div>
    </form>
  );
};

export default Input;
