import React from "react";
import styled from "styled-components";
import CoinInfoTitle from "../atoms/CoinInfoTitle";

interface ITitle {
  title: string;
  width: number;
}

interface IProps {
  titles: ITitle[];
}

export const CoinInfoTitleContainer: React.FC<IProps> = ({ titles }) => {
  return (
    <STDContainer>
      {titles.map(({ title, width }, idx) => (
        <CoinInfoTitle key={idx} title={title} width={width} />
      ))}
    </STDContainer>
  );
};

const STDContainer = styled.div`
  display: flex;
  width: 800px;
  background-color: #f8f8f8;
  font-size: 11px;
  font-weight: 600;
`;
