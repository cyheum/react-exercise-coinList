import React from "react";
import styled, { css } from "styled-components";
import mixin from "styles/mixin";

interface IProps {
  coinPrice: string;
  btcPrice: number;
  coinChangePer24h: number;
  coinChangePer7d: number;
}

const DetailCoinPrice: React.FC<IProps> = ({
  coinPrice,
  btcPrice,
  coinChangePer24h,
  coinChangePer7d,
}) => {
  return (
    <STDContainer>
      <STDPriceContainer>
        <STDPrice>{coinPrice}</STDPrice>
        <STDSymbolPrice>{btcPrice.toFixed(8)} BTC</STDSymbolPrice>
      </STDPriceContainer>
      <STDPerContainer>
        <STDTopPer coinChangePer24h={coinChangePer24h}>
          {coinChangePer24h.toFixed(1)}%
        </STDTopPer>
        <STDBottomPer coinChangePer7d={coinChangePer7d}>
          {coinChangePer7d.toFixed(1)}%
        </STDBottomPer>
      </STDPerContainer>
    </STDContainer>
  );
};

export default DetailCoinPrice;

const STDContainer = styled.div`
  ${mixin.flexSet("flex-end")}
  padding: 20px 0;
`;

const STDPriceContainer = styled.div`
  margin-right: 15px;
  text-align: right;
`;

const STDPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const STDSymbolPrice = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
`;

const STDPerContainer = styled.div`
  padding-top: 7px;
`;

const STDTopPer = styled.div<{ coinChangePer24h: number }>`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 3px;
  ${({ coinChangePer24h }) =>
    css`
      color: ${coinChangePer24h >= 0 ? "#ce3737" : "#1b8ed6"};
    `}
`;

const STDBottomPer = styled.div<{ coinChangePer7d: number }>`
  font-size: 12px;
  ${({ coinChangePer7d }) =>
    css`
      color: ${coinChangePer7d >= 0 ? "#ce3737" : "#1b8ed6"};
    `}
`;
