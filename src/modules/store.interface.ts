import { ICoinData } from "pages";
import { ICoinDetail } from "./coinDetail.interface";

export const SET_BOOKMARK_LIST = "GET_BOOKMARK_LIST";
export const SET_COIN_DETAIL = "GET_COIN_DETAIL";
export const SET_VIEW_OPTION = "SET_VIEW_OPTION";
export const SET_CURRENCY_OPTION = "SET_CURRENCY_OPTION";
export const SET_COUNT_OPTION = "SET_COUNT_OPTION";
export const ADD_COIN_DATA = "ADD_COIN_DATA";
export const SET_MARK = "SET_MARK";
export const SET_EVENT_SPOT_HEIGHT = "SET_EVENT_SPOT_HEIGHT";

interface SetBookMarkList {
  type: typeof SET_BOOKMARK_LIST;
  payload: ICoinData[];
}

interface SetCoinDetail {
  type: typeof SET_COIN_DETAIL;
  payload: ICoinDetail;
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

interface SetMark {
  type: typeof SET_MARK;
  payload: boolean;
}

interface SetEventSpotHeight {
  type: typeof SET_EVENT_SPOT_HEIGHT;
  payload: number;
}

export type contentAction =
  | SetBookMarkList
  | SetCoinDetail
  | SetViewOption
  | SetCurrencyOption
  | SetCountOption
  | AddCoinData
  | SetMark
  | SetEventSpotHeight;

export interface InitialData {
  bookMarkList: ICoinData[];
  coinDetail: ICoinDetail | undefined;
  viewOption: string;
  currencyOption: string;
  countOption: string;
  dataLimitCount: number;
  isUnMarked: boolean;
  eventSpotHeight: number;
}
