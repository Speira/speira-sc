"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTableRowItem = void 0;
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const Styled_1 = require("./Styled");
/**
 * StyledTableRowItem
 * @component
 */
exports.StyledTableRowItem = (0, styled_components_1.styled)(Styled_1.Styled) `
  align-items: center;
  box-shadow: -1px 0 0px 0px var(--sp-color-primary);
  display: flex;
  height: 100%;
  justify-content: flex-start;
  min-width: 3em;
  overflow-x: auto;
  padding: 8px;
  text-overflow: ellipsis;
  &:first-child {
    border-left: none;
  }
  &.sp-head {
    cursor: text;
    font-weight: bold;
    justify-content: center;
    column-gap: 4px;
  }
  &.sp-center {
    justify-content: center;
  }
  &.sp-clickable {
    cursor: pointer;
  }
  &.sp-xs {
    width: 4em;
  }
  &.sp-sm {
    width: 6em;
  }
  &.sp-md {
    width: 8em;
  }
  &.sp-lg {
    width: 10em;
  }
  &.sp-xl {
    width: 12em;
  }
  ${mediaQueries_1.media.xl} {
    &.sp-xs {
      width: 6em;
    }
    &.sp-sm {
      width: 9em;
    }
    &.sp-md {
      width: 13em;
    }
    &.sp-lg {
      width: 18em;
    }
    &.sp-xl {
      width: 24em;
    }
  }
`;
