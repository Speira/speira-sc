"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTable = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
/**
 * StyledTable
 * @component
 */
exports.StyledTable = (0, styled_components_1.styled)(Styled_1.Styled) `
  border: 1px solid var(--sp-bg-color);
  border-radius: 4px;
  box-shadow: 0 0 2px -1px var(--sp-font-color) inset;
  display: inline-block;
  min-height: 6em;
  min-width: 2em;
  overflow: hidden auto;
  padding: 0em;
  position: relative;
`;
