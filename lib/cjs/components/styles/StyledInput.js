"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextarea = exports.StyledInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const Styled_1 = require("./Styled");
/**
 * StyledInput
 * @styled-component
 */
exports.StyledInput = (0, styled_components_1.styled)(Styled_1.Styled).attrs(() => ({ as: 'input' })) `
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  border-style: solid;
  border-width: 0;
  border-color: var(--sp-font-color);
  outline-color: var(--sp-font-color);
  box-shadow: 0 0 0px 0.5px var(--sp-font-color);
  cursor: text;
  padding: 0.4em 1rem;
  position: relative;
  transition: all 0.18s ease-in-out;
  max-width: 97vw;
  &.sp-border {
    border-width: 1px;
  }
  &.sp-danger {
    border-width: 2px;
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 0.5px 0.5px var(--sp-font-color);
  }
  &[type='checkbox']:focus {
    box-shadow: none;
  }
  &[type='checkbox'],
  &[type='range'],
  &[type='color'] {
    box-shadow: 0 0 0px 0.5px inset var(--sp-font-color);
    padding: 0.2rem;
    border-radius: none;
    cursor: pointer;
  }
  &:disabled {
    box-shadow: none;
    cursor: text;
    opacity: 0.6;
  }
  &:disabled:after {
    background-color: transparent;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: none;
    width: 100%;
  }
  &.sp-xs {
    width: 3em;
  }
  &.sp-sm {
    width: 8em;
  }
  &.sp-md {
    width: 12em;
  }
  &.sp-lg {
    width: 16em;
  }
  &.sp-xl {
    width: 20em;
  }
  ${mediaQueries_1.media.xl} {
    &.sp-xs {
      width: 3em;
    }
    &.sp-sm {
      width: 8em;
    }
    &.sp-md {
      width: 12em;
    }
    &.sp-lg {
      width: 20em;
    }
    &.sp-xl {
      width: 32em;
    }
  }
`;
const BaseTextarea = (0, styled_components_1.styled)(exports.StyledInput).attrs(() => ({ as: 'textarea' })) ``;
function StyledTextarea(props) {
    return (0, jsx_runtime_1.jsx)(BaseTextarea, Object.assign({}, props));
}
exports.StyledTextarea = StyledTextarea;
