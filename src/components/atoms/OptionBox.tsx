import React from "react";
import styled from "styled-components";
import mixin from "styles/mixin";
import mainSvg from "svgs";

export interface IOptions {
  id: string;
  value: string;
  items: IItems;
}

interface IItems {
  [key: string]: string;
}

interface IProps {
  open: boolean;
  option: IOptions;
  onOpenChange: (isOpen: boolean, option: IOptions) => void;
  onClickItem: (id: string, value: string) => void;
}

interface IOPTION_DATA {
  [key: string]: {
    [key: string]: string;
  };
}

const OptionBox: React.FC<IProps> = ({
  open,
  option,
  onOpenChange,
  onClickItem,
}) => {
  const { id, value } = option;
  const newData = Object.keys(option.items).map((title) => {
    return {
      itemKey: title,
      label: option.items[title],
    };
  });

  const getItemLabel = (itemKey: string) => {
    return option.items[itemKey];
  };

  return (
    <STDContainer
      onClick={(e) => {
        e.stopPropagation();
        onOpenChange(true, option);
      }}
    >
      {getItemLabel(value)}
      {mainSvg.upImg()}
      {open && (
        <STDSelectContainer>
          {newData.map(({ itemKey, label }) => (
            <li
              key={itemKey}
              onClick={(e) => {
                e.stopPropagation();
                onClickItem(id, itemKey);
                onOpenChange(false, option);
              }}
            >
              {label}
            </li>
          ))}
        </STDSelectContainer>
      )}
    </STDContainer>
  );
};

export default OptionBox;

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
