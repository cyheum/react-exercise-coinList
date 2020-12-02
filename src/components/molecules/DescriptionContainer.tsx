import React from "react";
import styled from "styled-components";
import DescriptionBtn from "components/atoms/DescriptionBtn";

interface IProps {
  coinDescription: string | undefined;
  isOpen: boolean;
  onClickOpenToggle: () => void;
}

export const DescriptionContainer: React.FC<IProps> = ({
  coinDescription,
  isOpen,
  onClickOpenToggle,
}) => {
  const newDescription = coinDescription?.split("\n") ?? [];
  const newDescriptionWithBr = newDescription.map((it, idx, arr) => {
    const isLast = idx === arr.length - 1;
    return (
      <React.Fragment key={idx}>
        {it}
        {!isLast && <br />}
      </React.Fragment>
    );
  });

  return (
    <div>
      <DescriptionBtn isOpen={isOpen} onClickOpenToggle={onClickOpenToggle} />
      {isOpen && <STDDescription>{newDescriptionWithBr}</STDDescription>}
    </div>
  );
};

const STDDescription = styled.div`
  margin: 10px 0;
  font-size: 12px;
  line-height: 17px;
`;
