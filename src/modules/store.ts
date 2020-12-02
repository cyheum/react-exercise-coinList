import {
  SET_BOOKMARK_LIST,
  SET_COIN_DETAIL,
  SET_COUNT_OPTION,
  SET_CURRENCY_OPTION,
  SET_VIEW_OPTION,
  ADD_COIN_DATA,
  SET_MARK,
  SET_EVENT_SPOT_HEIGHT,
  contentAction,
} from "./store.interface";
import { ICoinData } from "pages";

export const setBookMarkList = (data: ICoinData[]) => ({
  type: SET_BOOKMARK_LIST,
  payload: data,
});

export const setCoinDetail = (data: any) => ({
  type: SET_COIN_DETAIL,
  payload: data,
});

export const setViewOption = (option: string) => ({
  type: SET_VIEW_OPTION,
  payload: option,
});

export const setCurrencyOption = (option: string) => ({
  type: SET_CURRENCY_OPTION,
  payload: option,
});

export const setCountOption = (option: string) => ({
  type: SET_COUNT_OPTION,
  payload: option,
});

export const addCoinData = () => ({
  type: ADD_COIN_DATA,
});

export const setMark = (isUnMarked: boolean) => ({
  type: SET_MARK,
  payload: isUnMarked,
});

export const setEventSpotHeight = (num: number) => ({
  type: SET_EVENT_SPOT_HEIGHT,
  payload: num,
});

const INITIAL_STATE = {
  bookMarkList: [],
  coinDetail: {},
  viewOption: "all",
  currencyOption: "krw",
  countOption: "50",
  dataLimitCount: 1,
  isUnMarked: false,
  eventSpotHeight: 0,
};

export default function mainStore(
  state = INITIAL_STATE,
  action: contentAction
) {
  switch (action.type) {
    case SET_BOOKMARK_LIST:
      return {
        ...state,
        bookMarkList: action.payload,
      };
    case SET_COIN_DETAIL:
      return {
        ...state,
        coinDetail: action.payload,
      };
    case SET_VIEW_OPTION:
      return {
        ...state,
        viewOption: action.payload,
      };
    case SET_CURRENCY_OPTION:
      return {
        ...state,
        currencyOption: action.payload,
      };
    case SET_COUNT_OPTION:
      return {
        ...state,
        countOption: action.payload,
      };
    case ADD_COIN_DATA:
      return {
        ...state,
        dataLimitCount: state.dataLimitCount + 1,
      };
    case SET_MARK:
      return {
        ...state,
        isUnMarked: action.payload,
      };
    case SET_EVENT_SPOT_HEIGHT:
      return {
        ...state,
        eventSpotHeight: action.payload,
      };
    default:
      return state;
  }
}
