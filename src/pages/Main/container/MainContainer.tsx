import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBookMarkList, setCoinDetail } from "modules/store";
import { useGetStore } from "hooks/useGetData";
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
  const dispatch = useDispatch();
  const [coinList, setCoinList] = useState<ICoinData[]>([]);
  const [activeSelectBox, setActiveSelectBox] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const {
    currencyOption,
    countOption,
    dataLimitCount,
    isUnMarked,
    eventSpotHeight,
  } = useGetStore();

  const getCoinList = async (
    count: string,
    currency: string,
    dataLimitCount: number
  ) => {
    try {
      setIsFetching(true);
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
      setIsFetching(false);
    } catch (err) {
      alert("API 호출 실패!!");
      console.error(err);
    }
  };

  const getCoinDetailData = async (coinId: string | undefined) => {
    if (coinId) {
      try {
        setIsFetching(true);
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`,
          {
            params: {
              tickers: false,
              community_data: false,
              developer_data: false,
            },
          }
        );
        dispatch(setCoinDetail(res.data));
        setIsFetching(false);
      } catch (err) {
        alert("API 호출 실패!!");
        console.error(err);
      }
    }
  };

  const getBookMarkList = () => {
    const data = localStorage.getItem("bookMarkList");

    if (data) {
      dispatch(setBookMarkList(JSON.parse(data)));
    } else {
      dispatch(setBookMarkList([]));
    }
  };

  const onChangeActiveSelectBox = (item: string | null) => {
    setActiveSelectBox(item);
  };

  useEffect(() => {
    getCoinList(countOption, currencyOption, dataLimitCount);
    getBookMarkList();
  }, [dataLimitCount, countOption, currencyOption]);

  const renderScreen = (path: string) => {
    switch (path) {
      case "/priceList":
      case "/bookMark":
        return (
          <MainScreen
            categoryTitles={CATEGORY_TITLES}
            coinInfoTitles={COIN_INFO_TITLES}
            isUnMarked={isUnMarked}
            eventSpotHeight={eventSpotHeight}
            coinList={coinList}
            path={match.path}
            activeSelectBox={activeSelectBox}
            isFetching={isFetching}
            onChangeActiveSelectBox={onChangeActiveSelectBox}
          />
        );
      case "/priceList/:id":
      case "/bookMark/:id":
        return (
          <CoinDetailScreen
            isUnMarked={isUnMarked}
            eventSpotHeight={eventSpotHeight}
            coinId={match.params.id}
            isFetching={isFetching}
            activeSelectBox={activeSelectBox}
            getCoinDetailData={getCoinDetailData}
            onChangeActiveSelectBox={onChangeActiveSelectBox}
          />
        );
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
