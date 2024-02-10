"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledLoader = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
const Spin = (0, styled_components_1.keyframes) `
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
exports.StyledLoader = (0, styled_components_1.styled)(Styled_1.Styled) `
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
