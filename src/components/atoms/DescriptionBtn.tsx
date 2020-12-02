import React from "react";
import styled from "styled-components";

interface IProps {
  isOpen: boolean;
  onClickOpenToggle: () => void;
}

const DescriptionBtn: React.FC<IProps> = ({ isOpen, onClickOpenToggle }) => {
  return (
    <STDContainer onClick={onClickOpenToggle}>
      설명 보기 {isOpen ? "▲" : "▼"}
    </STDContainer>
  );
};

export default DescriptionBtn;

const STDContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;
