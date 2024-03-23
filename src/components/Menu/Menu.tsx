import React, { useContext, useRef } from "react";
import cx from "classnames";

import { CardsContext } from "../../context/cardsContext";

export const Menu: React.FC = () => {
  const { tags, filterCards } = useContext(CardsContext);

  const activeTag = useRef<string>("");

  console.log(12341324);

  const handleTagClick = (el: string) => {
    activeTag.current = el;
    filterCards(el);
  };

  return (
    <ul className="flex-initial flex-shrink-0 w-64 text-base font-bold border border-gray p-3 rounded">
      <li
        className={cx("p-3 cursor-pointer rounded-small", {
          "bg-primary text-white ": !activeTag.current,
        })}
        onClick={() => handleTagClick("")}
      >
        Все элементы
      </li>
      {tags.map((el) => (
        <li
          className={cx("p-3 cursor-pointer duration-300 rounded-small", {
            "bg-primary text-white ": el === activeTag.current,
          })}
          key={el}
          onClick={() => handleTagClick(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
