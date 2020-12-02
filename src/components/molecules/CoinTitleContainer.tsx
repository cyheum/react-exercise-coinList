import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useGetOptions } from "hooks/useGetData";
import { setCurrencyOption } from "modules/store";
import StarIcon from "../atoms/StarIcon";
import OptionBox from "../atoms/OptionBox";
import mixin from "styles/mixin";

interface IProps {
  coinLogo: string | undefined;
  coinName: string | undefined;
  coinSymbol: string | undefined;
  activeSelectBox: string | null;
  isInBookMarkList: boolean;
  onClickBookMarkToggle: (position: number) => void;
  onChangeActiveSelectBox: (item: string | null) => void;
}

export const CoinTitleContainer: React.FC<IProps> = ({
  coinLogo,
  coinName,
  coinSymbol,
  activeSelectBox,
  isInBookMarkList,
  onClickBookMarkToggle,
  onChangeActiveSelectBox,
}) => {
  const dispatch = useDispatch();
  const { currencyOption } = useGetOptions();
  const option = {
    id: "currency",
    value: currencyOption,
    items: { krw: "KRW 보기", usd: "USD 보기" },
  };

  const handleClickOption = (optionId: string, itemKey: string) => {
    switch (optionId) {
      case "currency":
        dispatch(setCurrencyOption(itemKey));
        return;
      default:
        return;
    }
  };

  return (
    <STDContainer>
      <STDLeftTitleContainer>
        <StarIcon
          isInBookMarkList={isInBookMarkList}
          onClickBookMarkToggle={onClickBookMarkToggle}
        />
        <STDCoinLogo alt="logo" src={coinLogo} />
        <STDCoinName>
          {coinName || "로딩 중"} ({coinSymbol?.toUpperCase() || ""})
        </STDCoinName>
      </STDLeftTitleContainer>

      <OptionBox
        option={option}
        open={activeSelectBox === option.id}
        onOpenChange={(isOpen, option) =>
          onChangeActiveSelectBox(isOpen ? option.id : null)
        }
        onClickItem={handleClickOption}
      />
    </STDContainer>
  );
};

const STDContainer = styled.div`
  ${mixin.flexSet("space-between")}
`;

const STDLeftTitleContainer = styled.div`
  ${mixin.flexSet()}
`;

const STDCoinLogo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

const STDCoinName = styled.div`
  font-size: 23px;
  font-weight: 600;
`;
