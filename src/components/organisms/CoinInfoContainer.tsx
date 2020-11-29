import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ICoinData } from "pages";
import CoinInfo from "../molecules/CoinInfo";
import AddBox from "components/atoms/AddBox";
import { addCoinData } from "modules/store";

interface IProps {
  coinData: ICoinData[];
}

export const CoinInfoContainer: React.FC<IProps> = ({ coinData }) => {
  const dispatch = useDispatch();
  return (
    <STDContainer>
      {coinData.map((coinInfo, idx) => (
        <CoinInfo key={idx} coinInfo={coinInfo} />
      ))}
      <AddBox onClickAddPage={() => dispatch(addCoinData())} />
    </STDContainer>
  );
};

const STDContainer = styled.div``;
