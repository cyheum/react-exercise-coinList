import {
  DataType,
  GET_COIN_LIST,
  GET_BOOKMARK_LIST,
  GET_COIN_DETAIL,
  SET_COUNT_OPTION,
  SET_CURRENCY_OPTION,
  SET_VIEW_OPTION,
  ADD_COIN_DATA,
  contentAction,
} from "./store.interface";

export const getCoinList = (data: DataType[]) => ({
  type: GET_COIN_LIST,
  payload: data,
});

export const getBookMarkList = (data: DataType[]) => ({
  type: GET_BOOKMARK_LIST,
  payload: data,
});

export const getCoinDetail = (data: any) => ({
  type: GET_COIN_DETAIL,
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

const INITIAL_STATE = {
  coinList: [],
  bookMarkList: [],
  coinDetail: {},
  viewOption: "all",
  currencyOption: "krw",
  countOption: "50",
  dataLimitCount: 1,
};

export default function mainStore(
  state = INITIAL_STATE,
  action: contentAction
) {
  switch (action.type) {
    case GET_COIN_LIST:
      return {
        ...state,
        coinList: action.payload,
      };
    case GET_BOOKMARK_LIST:
      return {
        ...state,
        bookMarkList: action.payload,
      };
    case GET_COIN_DETAIL:
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
    default:
      return state;
  }
}
