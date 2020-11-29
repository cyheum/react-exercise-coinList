import CategoryBox from "components/atoms/CategoryBox";
import React from "react";
import styled from "styled-components";

interface Categories {
  id: string;
  title: string;
}

interface IProps {
  categories: Categories[];
  currentPage: string;
}

export const Categories: React.FC<IProps> = ({ categories, currentPage }) => {
  return (
    <STDConatiner>
      {categories.map(({ id, title }, idx) => (
        <CategoryBox
          title={title}
          key={idx}
          id={id}
          currentPage={currentPage}
        />
      ))}
    </STDConatiner>
  );
};

const STDConatiner = styled.div`
  display: flex;
  margin: 0 auto;
`;
