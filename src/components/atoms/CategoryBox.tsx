import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import mixin from "styles/mixin";

interface ContainerProps {
  id: string;
  currentPage: string;
}

interface IProps extends ContainerProps {
  title: string;
}

const CategoryBox: React.FC<IProps> = ({ title, id, currentPage }) => {
  return (
    <Link to={id}>
      <STDContainer id={id} currentPage={currentPage}>
        {title}
      </STDContainer>
    </Link>
  );
};

export default CategoryBox;

const STDContainer = styled.div<ContainerProps>`
  ${mixin.flexSet()};
  width: 400px;
  height: 60px;
  border-radius: 3px;
  font-size: 25px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
  background-color: #efefef;

  ${({ id, currentPage }) =>
    id === currentPage &&
    css`
      color: black;
      background-color: white;
      box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.1);
    `}
`;
