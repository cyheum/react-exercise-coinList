import React from "react";
import styled, { css } from "styled-components";
import mixin from "styles/mixin";

interface IProps {
  title: string;
  width: number;
}

const CoinInfoTitle: React.FC<IProps> = ({ title, width }) => {
  return <STDContainer width={width}>{title}</STDContainer>;
};

export default CoinInfoTitle;

const STDContainer = styled.div<{ width: number }>`
  ${mixin.flexSet()};
  height: 30px;
  color: #bebebe;
  ${({ width }) => css`
    width: ${width}px;
  `}
`;
