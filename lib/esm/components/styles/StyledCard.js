"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCard = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
/**
 * StyledCard
 * @styled-component
 */
exports.StyledCard = (0, styled_components_1.styled)(Styled_1.Styled) `
  align-items: center;
  border-radius: 2em;
  box-shadow: 0px 0px 0px 1px var(--sp-font-color);
  color: var(--sp-font-color);
  display: flex;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  padding: 1rem;
  row-gap: 1rem;
  width: 260px;
  &.sp-clickable {
    cursor: pointer;
  }
  &.sp-clickable:hover {
    transform: scale(0.96);
    transition: all 0.2s;
  }
  &.sp-clickable:active {
    opacity: 0.7;
  }
`;
