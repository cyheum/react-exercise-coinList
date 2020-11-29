export const GET_COIN_LIST = "GET_COIN_LIST";
export const GET_BOOKMARK_LIST = "GET_BOOKMARK_LIST";
export const GET_COIN_DETAIL = "GET_COIN_DETAIL";
export const SET_VIEW_OPTION = "SET_VIEW_OPTION";
export const SET_CURRENCY_OPTION = "SET_CURRENCY_OPTION";
export const SET_COUNT_OPTION = "SET_COUNT_OPTION";

export interface DataType {
  data: any;
}

interface GetCoinList {
  type: typeof GET_COIN_LIST;
  payload: DataType[];
}

interface GetBookMarkList {
  type: typeof GET_BOOKMARK_LIST;
  payload: DataType[];
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

export type contentAction =
  | GetCoinList
  | GetBookMarkList
  | GetCoinDetail
  | SetViewOption
  | SetCurrencyOption
  | SetCountOption;
