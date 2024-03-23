import React, { useContext, useRef } from "react";
import cx from "classnames";

import { CardsContext } from "../../context/cardsContext";

export const Menu: React.FC = () => {
  const { tags, filterCards } = useContext(CardsContext);

  const activeTag = useRef<string>("");

  const handleTagClick = (el: string) => {
    if (activeTag.current === el) return;

    activeTag.current = el;
    filterCards(el);
  };

  return (
    <ul className="flex-initial flex-shrink-0 w-64 text-base font-bold border border-gray p-3 rounded sticky top-5">
      <li
        className={cx("p-3 cursor-pointer rounded-small select-none", {
          "bg-primary text-white": !activeTag.current,
        })}
        onClick={() => handleTagClick("")}
      >
        Все элементы
      </li>
      {tags.map((el) => (
        <li
          className={cx(
            "p-3 cursor-pointer duration-300 rounded-small select-none",
            {
              "bg-primary text-white ": el === activeTag.current,
            }
          )}
          key={el}
          onClick={() => handleTagClick(el)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
