import React from "react";
import styled from "styled-components";
import OptionBox from "../atoms/OptionBox";
import mixin from "styles/mixin";
import { useDispatch } from "react-redux";
import { useGetOptions } from "hooks/useGetData";
import {
  setViewOption,
  setCurrencyOption,
  setCountOption,
} from "modules/store";
import { IOptions } from "../atoms/OptionBox";
interface IProps {
  activeSelectBox: string | null;
  onChangeActiveSelectBox: (item: string | null) => void;
}

export const OptionContainer: React.FC<IProps> = ({
  activeSelectBox,
  onChangeActiveSelectBox,
}) => {
  const dispatch = useDispatch();
  const { viewOption, currencyOption, countOption } = useGetOptions();

  const options: IOptions[] = [
    {
      id: "view",
      value: viewOption,
      items: { all: "전체보기", bookMark: "북마크 보기" },
    },
    {
      id: "currency",
      value: currencyOption,
      items: { krw: "KRW 보기", usd: "USD 보기" },
    },
    {
      id: "count",
      value: countOption,
      items: { "10": "10개 보기", "30": "30개 보기", "50": "50개 보기" },
    },
  ];

  const handleClickOption = (optionId: string, itemKey: string) => {
    switch (optionId) {
      case "view":
        dispatch(setViewOption(itemKey));
        return;
      case "currency":
        dispatch(setCurrencyOption(itemKey));
        return;
      case "count":
        dispatch(setCountOption(itemKey));
        return;
      default:
        return;
    }
  };

  return (
    <STDContainer>
      {options.map((option) => (
        <OptionBox
          key={option.id}
          option={option}
          open={activeSelectBox === option.id}
          onOpenChange={(isOpen, option) =>
            onChangeActiveSelectBox(isOpen ? option.id : null)
          }
          onClickItem={handleClickOption}
        />
      ))}
    </STDContainer>
  );
};

const STDContainer = styled.div`
  ${mixin.flexSet("flex-end")};
  width: 800px;
  margin: 0 auto;
`;
