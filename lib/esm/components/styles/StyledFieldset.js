"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFieldset = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
/**
 * StyledFieldset
 * @styled-components
 */
exports.StyledFieldset = (0, styled_components_1.styled)(Styled_1.Styled).attrs(() => ({ as: "fieldset" })) `
  border-color: var(--sp-font-color);
  border-width: 0.5px;
  color: var(--sp-font-color);
  max-width: 50em;
  padding: 0.7em;
  border-radius: var(--sp-radius);
  legend {
    padding: 0 2px;
  }
  &.sp-left .sp-legend {
    text-align: left;
  }
  &.sp-center .sp-legend {
    text-align: center;
  }
  &.sp-right .sp-legend {
    text-align: right;
  }
  &.sp-row .sp-fieldset-content {
    display: flex;
    grid-column-gap: 0.7em;
  }
  &.sp-column .sp-fieldset-content {
    display: inline-grid;
    grid-row-gap: 0.7em;
    grid-template-rows: auto;
    text-align: right;
  }
`;
