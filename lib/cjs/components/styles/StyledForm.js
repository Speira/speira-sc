"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledForm = void 0;
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const Styled_1 = require("./Styled");
/**
 * StyledForm
 * @styled-component
 */
exports.StyledForm = (0, styled_components_1.styled)(Styled_1.Styled).attrs(() => ({ as: "form" })) `
  border-radius: var(--sp-radius);
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 3em;
  padding: 1rem;
  transition: height 1s;
  row-gap: 0.6rem;
  &.sp-xs {
    width: 90%;
  }
  &.sp-sm {
    width: 95%;
  }
  &.sp-md {
    width: 97%;
  }
  &.sp-lg {
    width: 100%;
  }
  &.sp-xl {
    width: 100%%;
  }
  ${mediaQueries_1.media.md} {
    &.sp-xs {
      width: 12em;
    }
    &.sp-sm {
      width: 24em;
    }
    &.sp-md {
      width: 36em;
    }
    &.sp-lg {
      width: 48em;
    }
    &.sp-xl {
      width: 60em;
    }
  }
`;
