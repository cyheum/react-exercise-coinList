import React from "react";
import styled from "styled-components";
import { Categories } from "components";
import { OptionContainer } from "components/molecules/OptionContainer";
import mixin from "styles/mixin";
import { CoinInfoTitleContainer, CoinInfoContainer } from "components";
import { ICoinData } from "../container/MainContainer";
import Loader from "./Loader";
import Toast from "components/atoms/Toast";

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
  isUnMarked: boolean;
  eventSpotHeight: number;
  path: string;
  coinList: ICoinData[];
  activeSelectBox: string | null;
  isFetching: boolean;
  onChangeActiveSelectBox: (item: string | null) => void;
}

const MainScreen: React.FC<IProps> = ({
  isUnMarked,
  eventSpotHeight,
  path,
  coinList,
  categoryTitles,
  coinInfoTitles,
  activeSelectBox,
  isFetching,
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
      {isFetching && <Loader />}
      <STDContainer onClick={() => onChangeActiveSelectBox(null)}>
        {isUnMarked && <Toast positionX={350} positionY={eventSpotHeight} />}
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
  position: relative;
  margin: 0 auto;
  padding: 100px 0;
`;

const STDEmptyBox = styled.div`
  width: 800px;
  height: 50px;
`;
