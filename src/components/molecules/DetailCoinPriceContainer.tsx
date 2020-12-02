import React from "react";
import styled from "styled-components";
import CoinMarketInfoBox from "components/atoms/CoinMarketInfoBox";
import DetailCoinPrice from "../atoms/DetailCoinPrice";

interface CoinMarketCap {
  title: string;
  titleValue: string | undefined;
}

interface IProps {
  coinMarketCapData: CoinMarketCap[];
  coinPrice: string;
  btcPrice: number;
  coinChangePer24h: number;
  coinChangePer7d: number;
}

const DetailCoinPriceContainer: React.FC<IProps> = ({
  coinMarketCapData,
  coinPrice,
  btcPrice,
  coinChangePer24h,
  coinChangePer7d,
}) => {
  return (
    <STDContainer>
      <DetailCoinPrice
        coinPrice={coinPrice}
        btcPrice={btcPrice}
        coinChangePer24h={coinChangePer24h}
        coinChangePer7d={coinChangePer7d}
      />
      <STDVolumeContainer>
        {coinMarketCapData.map(({ title, titleValue }) => (
          <CoinMarketInfoBox
            key={title}
            title={title}
            titleValue={titleValue}
          />
        ))}
      </STDVolumeContainer>
    </STDContainer>
  );
};

export default DetailCoinPriceContainer;

const STDContainer = styled.div`
  flex: 1;
`;

const STDVolumeContainer = styled.div`
  display: flex;
`;
