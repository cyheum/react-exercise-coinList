import React from "react";
import styled from "styled-components";
import mainSvg from "svgs";

interface IProps {
  onClickBookMarkToggle: () => void;
  isInBookMarkList: boolean;
}

const StarIcon: React.FC<IProps> = ({
  onClickBookMarkToggle,
  isInBookMarkList,
}) => {
  return (
    <STDContainer onClick={onClickBookMarkToggle}>
      {mainSvg.star(isInBookMarkList)}
    </STDContainer>
  );
};

export default StarIcon;

const STDContainer = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 5px;
`;
