import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useGetCoinDetail,
  useGetBookMarkList,
  useGetOptions,
} from "hooks/useGetData";
import { setBookMarkList, setMark, setEventSpotHeight } from "modules/store";
import { ICoinData } from "../container/MainContainer";
import Loader from "./Loader";
import {
  CoinTitleContainer,
  DescriptionContainer,
  DetailCoinInfoContainer,
  CurrencyExchangeContainer,
} from "components";
import Toast from "components/atoms/Toast";

interface IProps {
  isUnMarked: boolean;
  eventSpotHeight: number;
  coinId: string | undefined;
  isFetching: boolean;
  activeSelectBox: string | null;
  getCoinDetailData: (coinId: string | undefined) => void;
  onChangeActiveSelectBox: (item: string | null) => void;
}

const CoinDetailScreen: React.FC<IProps> = ({
  isUnMarked,
  eventSpotHeight,
  coinId,
  isFetching,
  activeSelectBox,
  getCoinDetailData,
  onChangeActiveSelectBox,
}) => {
  const location = useLocation<{ currentCoinData: ICoinData | undefined }>();
  const dispatch = useDispatch();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [cryptoCurrency, setCryptoCurrency] = useState<string | number>(1);
  const [exchangeResultPrice, setExchangeResultPrice] = useState(1);
  const currentCoinData = location.state?.currentCoinData;
  const coinDetailData = useGetCoinDetail();
  const bookMarkList = useGetBookMarkList();
  const { currencyOption } = useGetOptions();
  const bookMarkIdList = bookMarkList.map((bookMarkItem) => bookMarkItem.id);
  const coinRankData = [
    {
      title: "시가총액 Rank",
      titleValue: `Rank #${coinDetailData?.market_cap_rank || "-"}`,
    },
    {
      title: "웹 사이트",
      titleValue: coinDetailData?.links?.homepage[0] || "-",
    },
  ];
  const coinMarketCapData = [
    {
      title: "시가총액",
      titleValue:
        currencyOption === "krw"
          ? `₩${coinDetailData?.market_data?.market_cap.krw.toLocaleString()}`
          : `$${coinDetailData?.market_data?.market_cap.usd.toLocaleString(
              undefined,
              { maximumFractionDigits: 2 }
            )}`,
    },
    {
      title: "24시간 거래 대금",
      titleValue:
        currencyOption === "krw"
          ? `₩${
              coinDetailData?.market_data?.total_volume.krw.toLocaleString() ||
              "-"
            }`
          : `$${
              coinDetailData?.market_data?.total_volume.usd.toLocaleString(
                undefined,
                { maximumFractionDigits: 2 }
              ) || "-"
            }`,
    },
  ];
  const coinPrice =
    currencyOption === "krw"
      ? `₩${coinDetailData?.market_data?.current_price.krw.toLocaleString()}`
      : `$${coinDetailData?.market_data?.current_price.usd.toLocaleString(
          undefined,
          { maximumFractionDigits: 2 }
        )}`;

  const coinChangePer7d =
    coinDetailData?.market_data?.price_change_percentage_7d || 0;

  const coinChangePer24h =
    coinDetailData?.market_data?.price_change_percentage_24h || 0;

  const btcPrice = coinDetailData?.market_data?.current_price.btc || 0;

  const currentPrice =
    currencyOption === "krw"
      ? coinDetailData?.market_data?.current_price.krw || 1
      : coinDetailData?.market_data?.current_price.usd || 1;

  useEffect(() => {
    getCoinDetailData(coinId);
  }, [coinId]);

  useEffect(() => {
    onChangeExchangeResultPrice(
      coinDetailData?.market_data?.current_price.krw || 1
    );
  }, [coinDetailData]);

  const onChangeBookMarkList = (
    bookMarkList: ICoinData[],
    id: string,
    positionY: number
  ) => {
    if (currentCoinData) {
      if (bookMarkIdList.includes(id)) {
        const newBookMarkList = bookMarkList.filter(
          (bookMark) => bookMark.id !== id
        );
        localStorage.setItem("bookMarkList", JSON.stringify(newBookMarkList));
        dispatch(setBookMarkList(newBookMarkList));
        dispatch(setEventSpotHeight(positionY));
        dispatch(setMark(true));
        setTimeout(() => dispatch(setMark(false)), 1200);
      } else {
        localStorage.setItem(
          "bookMarkList",
          JSON.stringify([...bookMarkList, currentCoinData])
        );
        dispatch(setBookMarkList([...bookMarkList, currentCoinData]));
      }
    } else {
      alert("목록에서 코인 이름을 클릭해 주세요!");
    }
  };

  const endsWith = (str: string, searchStr: string) => {
    return str[str.length - 1] === searchStr;
  };

  const normalizeCryptoCurrencyNum = (num: string | number) => {
    if (num === "") {
      return 0;
    }

    if (typeof num === "number") {
      return num;
    }

    const numStrWithoutComma = num.split(",").join("");

    if (isNaN(Number(numStrWithoutComma))) {
      return null;
    }

    if (endsWith(numStrWithoutComma, ".")) {
      return numStrWithoutComma;
    } else {
      return Number(numStrWithoutComma);
    }
  };

  const onChangecryptoCurrency = (num: string | number) => {
    const normalizedNum = normalizeCryptoCurrencyNum(num);
    normalizedNum !== null && setCryptoCurrency(normalizedNum);
  };

  const onChangeExchangeResultPrice = (num: string | number) => {
    if (typeof num === "string") {
      const newNum = num.split(",").join("");
      console.log(num, newNum);
      if (!isNaN(Number(newNum))) {
        setExchangeResultPrice(Number(newNum));
      }
    } else {
      setExchangeResultPrice(num);
    }
  };

  return (
    <>
      {isFetching && <Loader />}
      <STDContainer>
        {isUnMarked && <Toast positionX={24} positionY={eventSpotHeight} />}
        <Link to="/priceList">
          <STDGoListBtn>{"<- 목록으로"}</STDGoListBtn>
        </Link>
        <CoinTitleContainer
          coinLogo={coinDetailData?.image?.small}
          coinName={
            coinDetailData?.localization?.ko || coinDetailData?.localization?.en
          }
          coinSymbol={coinDetailData?.symbol}
          activeSelectBox={activeSelectBox}
          onChangeActiveSelectBox={onChangeActiveSelectBox}
          isInBookMarkList={coinId ? bookMarkIdList.includes(coinId) : false}
          onClickBookMarkToggle={(positionY: number) =>
            coinId && onChangeBookMarkList(bookMarkList, coinId, positionY)
          }
        />
        <DetailCoinInfoContainer
          coinChangePer7d={coinChangePer7d}
          coinChangePer24h={coinChangePer24h}
          coinPrice={coinPrice}
          btcPrice={btcPrice}
          coinRankData={coinRankData}
          coinMarketCapData={coinMarketCapData}
        />
        <CurrencyExchangeContainer
          currencyOption={currencyOption}
          currentPrice={currentPrice}
          cryptoCurrency={cryptoCurrency}
          exchangeResultPrice={exchangeResultPrice}
          onChangecryptoCurrency={onChangecryptoCurrency}
          onChangeExchangeResultPrice={onChangeExchangeResultPrice}
        />
        <DescriptionContainer
          isOpen={isDescriptionOpen}
          coinDescription={
            coinDetailData?.description?.ko || coinDetailData?.description?.en
          }
          onClickOpenToggle={() => setIsDescriptionOpen((isOpen) => !isOpen)}
        />
      </STDContainer>
    </>
  );
};

export default CoinDetailScreen;

const STDContainer = styled.div`
  position: relative;
  width: 800px;
  margin: 70px auto;
`;

const STDGoListBtn = styled.div`
  width: 140px;
  padding: 13px 0;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;

  &:hover {
    box-shadow: 0 0 6px 3px rgba(100, 75, 75, 0.1);
  }
`;
