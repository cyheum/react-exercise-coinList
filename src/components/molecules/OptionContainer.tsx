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

interface IProps {
  activeSelectBox: string | null;
  changeActiveSelectBox: (item: string | null) => void;
}

export const OptionContainer: React.FC<IProps> = ({
  activeSelectBox,
  changeActiveSelectBox,
}) => {
  const dispatch = useDispatch();
  const { viewOption, currencyOption, countOption } = useGetOptions();
  const options = [
    { id: "view", value: viewOption },
    { id: "currency", value: currencyOption },
    { id: "count", value: countOption },
  ];

  const switchHandler = (id: string, value: string) => {
    switch (id) {
      case "view":
        console.log(id, value);
        dispatch(setViewOption(value));
        return;
      case "currency":
        console.log(id, value);
        dispatch(setCurrencyOption(value));
        return;
      case "count":
        console.log(id, value);
        dispatch(setCountOption(value));
        return;
    }
  };

  return (
    <STDContainer>
      {options.map((option, idx) => (
        <OptionBox
          key={idx}
          option={option}
          activeSelectBox={activeSelectBox}
          changeActiveSelectBox={changeActiveSelectBox}
          setOption={switchHandler}
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
