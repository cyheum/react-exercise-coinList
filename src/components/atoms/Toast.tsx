import React from "react";
import styled, { keyframes, css } from "styled-components";

interface IProps {
  positionX: number;
  positionY: number;
}

const Toast: React.FC<IProps> = ({ positionX, positionY }) => {
  return (
    <STDContainer positionX={positionX} positionY={positionY}>
      북마크가 해제되었습니다.
    </STDContainer>
  );
};

export default Toast;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const STDContainer = styled.div<IProps>`
  position: absolute;
  ${({ positionX, positionY }) => css`
    top: ${positionY}px;
    left: ${positionX}px;
  `}
  padding: 10px;
  background-color: #8facf7;
  border-radius: 5px;

  font-size: 11px;
  font-weight: 600;
  text-align: center;
  animation: ${fadeOut} 1200ms normal linear;
`;
