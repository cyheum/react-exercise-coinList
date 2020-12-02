import RankBox from "components/atoms/RankBox";
import DetailCoinPriceContainer from "components/molecules/DetailCoinPriceContainer";
import React from "react";
import styled from "styled-components";
import mixin from "styles/mixin";

interface Rank {
  title: string | undefined;
  titleValue: string | undefined;
}

interface CoinMarketCap {
  title: string;
  titleValue: string | undefined;
}

interface IProps {
  coinPrice: string | undefined;
  btcPrice: number;
  coinRankData: Rank[];
  coinMarketCapData: CoinMarketCap[];
  coinChangePer24h: number;
  coinChangePer7d: number;
}

export const DetailCoinInfoContainer: React.FC<IProps> = ({
  coinPrice,
  btcPrice,
  coinRankData,
  coinMarketCapData,
  coinChangePer24h,
  coinChangePer7d,
}) => {
  return (
    <STDContainer>
      <STDRankContainer>
        {coinRankData?.map(({ title, titleValue }) => (
          <RankBox key={title} title={title} titleValue={titleValue} />
        ))}
      </STDRankContainer>
      <DetailCoinPriceContainer
        coinMarketCapData={coinMarketCapData}
        coinPrice={coinPrice || "0"}
        btcPrice={btcPrice}
        coinChangePer24h={coinChangePer24h}
        coinChangePer7d={coinChangePer7d}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  ${mixin.flexSet("space-between")}
  margin-bottom: 25px;
`;

const STDRankContainer = styled.div``;
