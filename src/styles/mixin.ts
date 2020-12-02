import { css } from "styled-components";
import device from "./theme";

const ratio = {
  phone: 0.25,
  tablet: 0.5,
  laptop: 0.7,
};

const mixin = {
  flexSet: (
    justifyContent = "center",
    alignItems = "center",
    flexDirection = "row"
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
  dynamicScreen: (width = 0, height = 0, padding = [0, 0, 0, 0]) => css`
    width: 100%;
    height: ${height * ratio.phone}px;
    padding: ${padding[0] * ratio.phone}px ${padding[1] * ratio.phone}px
      ${padding[2] * ratio.phone}px ${padding[3] * ratio.phone}px;

    @media ${device.tablet} {
      width: ${width * ratio.tablet}px;
      height: ${height * ratio.tablet}px;
      padding: ${padding[0] * ratio.tablet}px ${padding[1] * ratio.tablet}px
        ${padding[2] * ratio.tablet}px ${padding[3] * ratio.tablet}px;
    }

    @media ${device.laptop} {
      width: ${width * ratio.laptop}px;
      height: ${height * ratio.laptop}px;
      padding: ${padding[0] * ratio.laptop}px ${padding[1] * ratio.laptop}px
        ${padding[2] * ratio.laptop}px ${padding[3] * ratio.laptop}px;
    }

    @media ${device.desktop} {
      width: ${width}px;
      height: ${height}px;
      padding: ${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
    }
  `,
};
export default mixin;
