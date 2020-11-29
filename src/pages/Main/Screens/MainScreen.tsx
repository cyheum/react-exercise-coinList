import React from "react";
import styled from "styled-components";
import { Categories } from "components";
import { OptionContainer } from "components/molecules/OptionContainer";
import mixin from "styles/mixin";

interface IProps {
  path: string;
  coinList: any[];
  bookMarkList: any[];
  activeSelectBox: string | null;
  addPageHandler: () => void;
  changeActiveSelectBox: (item: string | null) => void;
}

const MainScreen: React.FC<IProps> = ({
  path,
  coinList,
  bookMarkList,
  addPageHandler,
  activeSelectBox,
  changeActiveSelectBox,
}) => {
  console.log(coinList);

  const renderFilter = (path: string) => {
    switch (path) {
      case "/priceList":
        return (
          <OptionContainer
            activeSelectBox={activeSelectBox}
            changeActiveSelectBox={changeActiveSelectBox}
          />
        );
      case "/bookMark":
        return <STDEmptyBox />;
      default:
        return null;
    }
  };

  return (
    <STDContainer>
      <Categories categories={CATEGORY_TITLES} currentPage={path} />
      {renderFilter(path)}
    </STDContainer>
  );
};

export default MainScreen;

const CATEGORY_TITLES = [
  { id: "/priceList", title: "가상자산 시세 목록" },
  { id: "/bookMark", title: "북마크 목록" },
];

const STDContainer = styled.div`
  ${mixin.flexSet("center", "auto", "column")}
  display: flex;
  margin: 100px auto;
`;

const STDEmptyBox = styled.div`
  width: 800px;
  height: 50px;
`;
