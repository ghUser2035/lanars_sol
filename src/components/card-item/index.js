import React from "react";
import clsx from "clsx";

import "./style.scss";

export const MahjongItem = ({ number, handleClick, isActive }) => {
  return (
    <li className="card">
      <button type="button" className="card__button" onClick={handleClick}>
        <span className={clsx(isActive && "active", "card__text")}>
          {number}
        </span>
      </button>
    </li>
  );
};
