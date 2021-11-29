import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCards } from "../../redux/action";
import { mainSelector } from "../../redux/selector";
import { MahjongItem } from "../card-item";

import "./style.scss";

export const MahjongWrapper = () => {
  const dispatch = useDispatch();
  const { numsArr, activeCards } = useSelector(mainSelector);

  const handleClick = (number) => {
    const newActiveCards = [...activeCards, number];

    const arrLength = newActiveCards.length;
    dispatch(setActiveCards(newActiveCards));

    const lastElem = newActiveCards[arrLength - 1];
    const prevLastElem = newActiveCards[arrLength - 2];
    const firstNumber = numsArr[lastElem];
    const secondNumber = numsArr[prevLastElem];

    if (arrLength % 2 === 0 && firstNumber !== secondNumber) {
      setTimeout(() => {
        dispatch(setActiveCards(newActiveCards.slice(0, arrLength - 2)));
      }, 400);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      return dispatch(setActiveCards([]));
    }, 5000);
  }, [dispatch]);

  return (
    <div className="mahjong__container cards">
      <ul className="cards__list cards">
        {numsArr.map((number, i) => {
          return (
            <MahjongItem
              key={i}
              number={number}
              handleClick={() => handleClick(i)}
              isActive={activeCards.includes(i)}
            />
          );
        })}
      </ul>
    </div>
  );
};
