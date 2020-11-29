import React from "react";
import styled from "styled-components";

interface IProps {
  onClickAddPage: () => void;
}

const AddBox: React.FC<IProps> = ({ onClickAddPage }) => {
  return <STDContainer onClick={onClickAddPage}>+ 더보기</STDContainer>;
};

export default AddBox;

const STDContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;
