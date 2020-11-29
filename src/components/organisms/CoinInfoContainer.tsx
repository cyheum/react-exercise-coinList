import React from "react";
import { useDispatch } from "react-redux";
import { ICoinData } from "pages";
import CoinInfo from "../molecules/CoinInfo";
import AddBox from "components/atoms/AddBox";
import { addCoinData } from "modules/store";
import { useGetBookMarkList, useGetOptions } from "hooks/useGetData";

interface IProps {
  coinData: ICoinData[];
  isPathBookMark: boolean;
}

export const CoinInfoContainer: React.FC<IProps> = ({
  coinData,
  isPathBookMark,
}) => {
  const dispatch = useDispatch();
  const { viewOption } = useGetOptions();
  const bookMarkList = useGetBookMarkList();
  const bookMarkIdList = bookMarkList.map((bookMark) => bookMark.id);
  const getCoinData = () => {
    if (isPathBookMark) {
      return bookMarkList;
    } else {
      if (viewOption === "bookMark") {
        const newCoinData = coinData.filter((coinInfo) =>
          bookMarkIdList.includes(coinInfo.id)
        );
        return newCoinData;
      } else {
        return coinData;
      }
    }
  };

  return (
    <main>
      {getCoinData().map((coinInfo, idx) => {
        return (
          <CoinInfo
            key={idx}
            coinInfo={coinInfo}
            bookMarkIdList={bookMarkIdList}
          />
        );
      })}
      {!isPathBookMark && (
        <AddBox onClickAddPage={() => dispatch(addCoinData())} />
      )}
    </main>
  );
};
