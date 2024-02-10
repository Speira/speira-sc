import { keyframes, styled } from "styled-components";

import { Styled } from "./Styled";

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled(Styled)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
  .sp-loader {
    animation: ${Spin} 2s linear infinite;
    border: 16px solid var(--sp-bg-color);
    border-radius: 50%;
    border-top: 16px solid var(--sp-color-info);
    height: 50%;
    width: 50%;
  }
`;
