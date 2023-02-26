import React from "react";

const List = ({ definition, example }) => {
  return (
    <div className="text-[15px] md:!text-[18px] leading-6 font-[400]">
      <li className="dark:text-[var(--white-color)] ">{definition}</li>
      <p className="text-[var(--gray-color)]  pt-3 dark:text-[var(--gray-color)]">
        {example}
      </p>{" "}
    </div>
  );
};

export default List;
