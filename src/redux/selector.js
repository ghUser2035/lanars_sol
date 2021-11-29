import { createSelector } from "reselect";

export const numsArrSelector = (state) => state.mahjongReducer.numsArr;

export const activeCardsSelector = (state) => state.mahjongReducer.activeCards;

export const mainSelector = createSelector(
  numsArrSelector,
  activeCardsSelector,
  (numsArr, activeCards) => ({ numsArr, activeCards })
);
