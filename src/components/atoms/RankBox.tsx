import React from "react";
import styled from "styled-components";

interface IProps {
  title: string | undefined;
  titleValue: string | undefined;
}

const RankBox: React.FC<IProps> = ({ title, titleValue }) => {
  return (
    <STDContainer>
      <STDTitle>{title || "로딩중..."}</STDTitle>
      <STDTitleValue>{titleValue || ""}</STDTitleValue>
    </STDContainer>
  );
};

export default RankBox;

const STDContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.2);

  &:first-child {
    border-bottom: none;
  }
`;

const STDTitle = styled.div`
  width: 120px;
  padding: 20px 15px;
  font-size: 13px;
  font-weight: 500;
  background-color: #efefef;
`;

const STDTitleValue = styled.div`
  width: 280px;
  padding: 20px 15px;
  font-size: 13px;
`;
