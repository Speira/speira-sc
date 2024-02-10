"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTitle = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
/**
 * StyledTitle
 * @styled-components
 */
exports.StyledTitle = (0, styled_components_1.styled)(Styled_1.Styled) `
  color: var(--sp-font-color);
  margin: 0 0 0.5em;
  padding: 0.5em;
  &.sp-no-space {
    margin: unset;
    padding: unset;
  }
`;
