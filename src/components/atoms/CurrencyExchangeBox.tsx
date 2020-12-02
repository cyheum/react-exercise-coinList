import React from "react";
import styled from "styled-components";
import mixin from "styles/mixin";

interface IProps {
  currency: string;
  price: number | string;
  onChangeHandler: (num: string | number) => void;
}

const CurrencyExchangeBox: React.FC<IProps> = ({
  currency,
  price,
  onChangeHandler,
}) => {
  return (
    <STDContainer>
      <STDItemKey>{currency}</STDItemKey>
      <STDItemValue
        type="text"
        value={price}
        onChange={(e) => {
          onChangeHandler(e.target.value);
        }}
      />
    </STDContainer>
  );
};

export default CurrencyExchangeBox;

const STDContainer = styled.div`
  display: flex;
`;

const STDItemKey = styled.div`
  ${mixin.flexSet("flex-start")}
  width: 70px;
  height: 50px;
  padding: 0 15px;
  background-color: #efefef;
  border: 1px solid #cecece;
`;

const STDItemValue = styled.input`
  ${mixin.flexSet("flex-end")}
  text-align: end;
  width: 230px;
  height: 50px;
  padding-right: 15px;
  background-color: white;
  border: 1px solid #cecece;
  border-left: none;
`;
