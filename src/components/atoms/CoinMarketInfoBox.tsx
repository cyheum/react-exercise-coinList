import React from "react";
import styled from "styled-components";

interface IProps {
  title: string | undefined;
  titleValue: string | undefined;
}

const CoinMarketInfoBox: React.FC<IProps> = ({ title, titleValue }) => {
  return (
    <STDContainer>
      <STDTitle>{title}</STDTitle>
      <STDTitleValue>{titleValue}</STDTitleValue>
    </STDContainer>
  );
};

export default CoinMarketInfoBox;

const STDContainer = styled.div`
  flex: 1;
  text-align: end;
  padding-left: 0 20px;
`;

const STDTitle = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const STDTitleValue = styled.div`
  font-size: 12px;
`;
