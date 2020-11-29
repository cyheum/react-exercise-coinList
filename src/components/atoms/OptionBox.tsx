import React from "react";
import styled from "styled-components";
import mixin from "styles/mixin";
import mainSvg from "svgs";

interface IOptions {
  id: string;
  value: string | number;
}

interface IProps {
  option: IOptions;
  activeSelectBox: string | null;
  changeActiveSelectBox: (item: string | null) => void;
  setOption: (id: string, value: string) => void;
}

interface IOPTION_DATA {
  [key: string]: {
    [key: string]: string;
  };
}

const OptionBox: React.FC<IProps> = ({
  option,
  activeSelectBox,
  changeActiveSelectBox,
  setOption,
}) => {
  const { id, value } = option;
  const newData = Object.keys(OPTION_DATA[id]).map((title) => {
    return {
      key: title,
      optionValue: OPTION_DATA[id][title],
    };
  });

  return (
    <STDContainer onClick={() => changeActiveSelectBox(id)}>
      {OPTION_DATA[id][value]}
      {mainSvg.upImg()}
      {activeSelectBox === id && (
        <STDSelectContainer>
          {newData.map(({ key, optionValue }) => (
            <li
              key={key}
              onClick={(e) => {
                e.stopPropagation();
                setOption(id, key);
                changeActiveSelectBox(null);
              }}
            >
              {optionValue}
            </li>
          ))}
        </STDSelectContainer>
      )}
    </STDContainer>
  );
};

export default OptionBox;

const OPTION_DATA: IOPTION_DATA = {
  view: { all: "전체보기", bookMark: "북마크 보기" },
  currency: { krw: "KRW 보기", usd: "USD 보기" },
  count: { "10": "10개 보기", "30": "30개 보기", "50": "50개 보기" },
};

const STDContainer = styled.div`
  ${mixin.flexSet()};
  position: relative;
  width: 100px;
  height: 50px;
  margin: 10px 0;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px 3px rgba(100, 75, 75, 0.1);
  }

  svg {
    margin-left: 5px;
  }
`;

const STDSelectContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0 0 6px 3px rgba(100, 75, 75, 0.1);
  overflow: hidden;

  li {
    ${mixin.flexSet()};
    list-style: none;
    width: 100px;
    height: 50px;
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #efefef;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;
