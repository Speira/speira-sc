"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTableRow = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
/**
 * BaseTableRow
 * @styled-component
 */
exports.StyledTableRow = (0, styled_components_1.styled)(Styled_1.Styled) `
  align-items: center;
  border-bottom: 1px solid var(--sp-color-secondary);
  display: flex;
  justify-content: center;
  transition:
    opacity,
    top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: var(--sp-color-light-disabled);
  }
  &.sp-head {
    background-color: transparent;
    border-bottom: 2px solid var(--sp-color-primary);
    z-index: 1;
    max-height: 3.5em;
  }
  &.sp-xs {
    height: 2em;
  }
  &.sp-sm {
    height: 3em;
  }
  &.sp-md {
    height: 4em;
  }
  &.sp-lg {
    height: 7em;
  }
  &.sp-xl {
    height: 10em;
  }
`;
