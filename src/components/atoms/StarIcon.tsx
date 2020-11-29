import React from "react";
import styled from "styled-components";
import mainSvg from "svgs";

const StarIcon = () => {
  return <STDContainer>{mainSvg.star(false)}</STDContainer>;
};

export default StarIcon;

const STDContainer = styled.div`
  font-size: 24px;
  cursor: pointer;
  padding-bottom: 5px;
`;
