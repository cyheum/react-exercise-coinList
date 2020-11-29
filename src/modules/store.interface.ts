import { ICoinData } from "pages";

export const SET_BOOKMARK_LIST = "GET_BOOKMARK_LIST";
export const GET_COIN_DETAIL = "GET_COIN_DETAIL";
export const SET_VIEW_OPTION = "SET_VIEW_OPTION";
export const SET_CURRENCY_OPTION = "SET_CURRENCY_OPTION";
export const SET_COUNT_OPTION = "SET_COUNT_OPTION";
export const ADD_COIN_DATA = "ADD_COIN_DATA";

interface GetBookMarkList {
  type: typeof SET_BOOKMARK_LIST;
  payload: ICoinData[];
}

interface GetCoinDetail {
  type: typeof GET_COIN_DETAIL;
  payload: any;
}

interface SetViewOption {
  type: typeof SET_VIEW_OPTION;
  payload: string;
}

interface SetCurrencyOption {
  type: typeof SET_CURRENCY_OPTION;
  payload: string;
}

interface SetCountOption {
  type: typeof SET_COUNT_OPTION;
  payload: number;
}

interface AddCoinData {
  type: typeof ADD_COIN_DATA;
}

export type contentAction =
  | GetBookMarkList
  | GetCoinDetail
  | SetViewOption
  | SetCurrencyOption
  | SetCountOption
  | AddCoinData;

export interface InitialData {
  bookMarkList: ICoinData[];
  coinDetail: any;
  viewOption: string;
  currencyOption: string;
  countOption: string;
  dataLimitCount: number;
}
