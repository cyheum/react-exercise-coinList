import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import { useGetOptions, useGetPage } from "hooks/useGetData";
import MainScreen from "../Screens/MainScreen";
import CoinDetailScreen from "../Screens/CoinDetailScreen";

interface IRoi {
  times: number;
  currency: string;
  percentage: number;
}

export interface ICoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: IRoi | null;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
}

export const MainContainer: React.FC<RouteComponentProps<{ id?: string }>> = ({
  match,
}) => {
  const [coinList, setCoinList] = useState<ICoinData[]>([]);
  const [bookMarkList, setBookMarkList] = useState<string[]>(() => {
    const data = localStorage.getItem("bookMarkList");
    return data ? JSON.parse(data) : [];
  });
  const [activeSelectBox, setActiveSelectBox] = useState<string | null>(null);
  const [isFetchDone, setIsFetchDone] = useState(false);
  const { currencyOption, countOption } = useGetOptions();
  const dataLimitCount = useGetPage();

  useEffect(() => {
    getCoinList(countOption, currencyOption, dataLimitCount);
  }, [dataLimitCount, countOption, currencyOption]);

  const getCoinList = async (
    count: string,
    currency: string,
    dataLimitCount: number
  ) => {
    try {
      setIsFetchDone(true);
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: currency,
            price_change_percentage: "1h,24h,7d",
            per_page: Number(count) * dataLimitCount,
            page: 1,
          },
        }
      );
      setCoinList(res.data);
      setIsFetchDone(false);
    } catch (err) {
      console.error(err);
    }
  };

  const changeBookMarkList = (names: string[]) => {
    setBookMarkList(names);
  };

  const onChangeActiveSelectBox = (item: string | null) => {
    setActiveSelectBox(item);
  };

  const renderScreen = (path: string) => {
    switch (path) {
      case "/priceList":
      case "/bookMark":
        return (
          <MainScreen
            categoryTitles={CATEGORY_TITLES}
            coinInfoTitles={COIN_INFO_TITLES}
            coinList={coinList}
            bookMarkList={bookMarkList}
            path={match.path}
            activeSelectBox={activeSelectBox}
            isFetchDone={isFetchDone}
            onChangeActiveSelectBox={onChangeActiveSelectBox}
          />
        );
      case "/priceList/:id":
      case "/bookMark/:id":
        return <CoinDetailScreen coinId={match.params.id} />;
      default:
        return <div>잘못된 경로입니다.</div>;
    }
  };

  return renderScreen(match.path);
};

const CATEGORY_TITLES = [
  { id: "/priceList", title: "가상자산 시세 목록" },
  { id: "/bookMark", title: "북마크 목록" },
];

const COIN_INFO_TITLES = [
  { title: "자산", width: 100 },
  { title: "", width: 170 },
  { title: "Price", width: 150 },
  { title: "1H", width: 70 },
  { title: "24H", width: 70 },
  { title: "7D", width: 70 },
  { title: "", width: 60 },
  { title: "24H Volume", width: 110 },
];
