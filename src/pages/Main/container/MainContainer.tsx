import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import axios from "axios";
import { useGetOptions } from "hooks/useGetData";
import MainScreen from "../Screens/MainScreen";
import CoinDetailScreen from "../Screens/CoinDetailScreen";

export const MainContainer: React.FC<RouteComponentProps<{ id?: string }>> = ({
  match,
}) => {
  const [coinList, setCoinList] = useState<any[]>([]);
  const [bookMarkList, setBookMarkList] = useState<any | null>();
  const [page, setPage] = useState(1);
  const [activeSelectBox, setActiveSelectBox] = useState<string | null>(null);
  const { currencyOption, countOption } = useGetOptions();

  useEffect(() => {
    getCoinList(countOption, currencyOption, page);
    getBookMarkList();
  }, [page, countOption, currencyOption]);

  const getCoinList = async (count: number, currency: string, page: number) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets/?vs_currency=${currency}&price_change_percentage=1h,24h,7d&per_page=${
          Number(count) * page
        }&page=1`
      );
      setCoinList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const getBookMarkList = async () => {
    const data: any | null = await new Promise((res) =>
      res(localStorage.getItem("bookMarkList"))
    );
    if (data) {
      setBookMarkList(JSON.parse(data));
    } else {
      setBookMarkList(data);
    }
  };

  const addPageHandler = () => {
    setPage((page) => page + 1);
  };

  const changeActiveSelectBox = (item: string | null) => {
    setActiveSelectBox(item);
  };

  const renderScreen = (path: string) => {
    console.log(match);
    switch (path) {
      case "/priceList":
      case "/bookMark":
        return (
          <MainScreen
            coinList={coinList}
            bookMarkList={bookMarkList}
            path={match.path}
            activeSelectBox={activeSelectBox}
            addPageHandler={addPageHandler}
            changeActiveSelectBox={changeActiveSelectBox}
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
