import { combineReducers } from "redux";
import { generateArray } from "../utils";

const arrSize = 50;

const numsArr = generateArray(arrSize);

const initState = {
  numsArr,
  activeCards: Array.from({ length: arrSize }, (_, i) => i),
};

const mahjongReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SET_ACTIVE_CARD":
      return {
        ...state,
        activeCards: payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  mahjongReducer,
});
