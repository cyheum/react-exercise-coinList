import React from "react";
import styled from "styled-components";
import { Categories } from "components";
import { OptionContainer } from "components/molecules/OptionContainer";
import mixin from "styles/mixin";
import { CoinInfoTitleContainer, CoinInfoContainer } from "components";
import { ICoinData } from "../container/MainContainer";
import Loader from "./Loader";

interface ICategoryTitles {
  id: string;
  title: string;
}

interface ICoinInfoTitles {
  title: string;
  width: number;
}

interface IProps {
  categoryTitles: ICategoryTitles[];
  coinInfoTitles: ICoinInfoTitles[];
  path: string;
  coinList: ICoinData[];
  activeSelectBox: string | null;
  isFetchDone: boolean;
  onChangeActiveSelectBox: (item: string | null) => void;
}

const MainScreen: React.FC<IProps> = ({
  path,
  coinList,
  categoryTitles,
  coinInfoTitles,
  activeSelectBox,
  isFetchDone,
  onChangeActiveSelectBox,
}) => {
  const renderFilter = (path: string) => {
    switch (path) {
      case "/priceList":
        return (
          <OptionContainer
            activeSelectBox={activeSelectBox}
            onChangeActiveSelectBox={onChangeActiveSelectBox}
          />
        );
      case "/bookMark":
        return <STDEmptyBox />;
      default:
        return null;
    }
  };

  return (
    <>
      {isFetchDone && <Loader />}
      <STDContainer onClick={() => onChangeActiveSelectBox(null)}>
        <Categories categories={categoryTitles} currentPage={path} />
        {renderFilter(path)}
        <CoinInfoTitleContainer titles={coinInfoTitles} />
        <CoinInfoContainer
          coinData={coinList}
          isPathBookMark={path === "/bookMark"}
        />
      </STDContainer>
    </>
  );
};

export default MainScreen;

const STDContainer = styled.div`
  ${mixin.flexSet("center", "center", "column")}
  display: flex;
  margin: 0 auto;
  padding: 100px 0;
`;

const STDEmptyBox = styled.div`
  width: 800px;
  height: 50px;
`;
