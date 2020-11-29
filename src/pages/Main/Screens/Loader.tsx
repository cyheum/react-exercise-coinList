import React from "react";
import styled, { keyframes } from "styled-components";
import mainSvg from "svgs";

const Loader: React.FC = () => {
  return (
    <STDLoadingWrapper>
      <div>{mainSvg.loderLogo}</div>
    </STDLoadingWrapper>
  );
};

export default Loader;

const rolling = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const STDLoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100000000;
  background-color: rgba(0, 0, 0, 0.3);

  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      animation: ${rolling} 1200ms infinite linear;
    }
  }
`;
