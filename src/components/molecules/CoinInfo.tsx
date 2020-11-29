import React from "react";
import styled, { css } from "styled-components";
import { useGetOptions } from "hooks/useGetData";
import { ICoinData } from "pages";
import StarIcon from "../atoms/StarIcon";
import mixin from "styles/mixin";

interface IProps {
  coinInfo: ICoinData;
}

const CoinInfo: React.FC<IProps> = ({ coinInfo }) => {
  const {
    name,
    symbol,
    current_price,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    total_volume,
  } = coinInfo;
  const { currencyOption } = useGetOptions();
  const getPrice = (price: number) => {
    return price - Math.floor(price) === 0 ? price : Number(price.toFixed(2));
  };
  const priceChangePerArray = [
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
  ];

  return (
    <STDContainer>
      <StarIcon />
      <STDCoinName>{name}</STDCoinName>
      <STDCoinSymbol>{symbol.toUpperCase()}</STDCoinSymbol>
      <STDCoinPrice>
        {currencyOption === "krw" ? "₩" : "$"}{" "}
        {getPrice(current_price).toLocaleString()}
      </STDCoinPrice>
      {priceChangePerArray.map((per) => (
        <STDPriceChnagePer isNegative={per < 0}>
          {per.toFixed(1)}%
        </STDPriceChnagePer>
      ))}
      <STDCoinVolume>
        {currencyOption === "krw" ? "₩" : "$"}
        {total_volume.toLocaleString()}
      </STDCoinVolume>
    </STDContainer>
  );
};

export default CoinInfo;

const STDContainer = styled.div`
  ${mixin.flexSet("flex-start")};
  width: 800px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const STDCoinName = styled.div`
  width: 130px;
  margin: 0 10px;
  font-size: 15px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const STDCoinSymbol = styled.div`
  width: 50px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
`;

const STDCoinPrice = styled.div`
  text-align: end;
  width: 110px;
  margin: 0 41px 0 10px;
  font-size: 13px;
  font-weight: 500;
`;

const STDPriceChnagePer = styled.div<{ isNegative: boolean }>`
  text-align: end;
  width: 50px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: 500;
  ${({ isNegative }) => css`
    color: ${isNegative ? "#1b8ed6" : "#ce3737"};
  `}
`;

const STDCoinVolume = styled.div`
  text-align: end;
  width: 152px;
  margin: 0 10px;
  font-size: 13px;
  font-weight: 500;
`;
