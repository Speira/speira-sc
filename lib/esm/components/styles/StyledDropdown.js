"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDropdown = void 0;
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const Styled_1 = require("./Styled");
/* The dropdown container */
exports.StyledDropdown = (0, styled_components_1.styled)(Styled_1.Styled) `
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  flex-flow: column;
  float: left;
  height: auto;
  position: relative;
  > .sp-dropdown {
    box-shadow: none;
    margin: 0.5px 0 0.5px;
  }
  > .sp-dropbtn {
    border-radius: var(--sp-radius);
    box-shadow: var(--sp-box-shadow) var(--sp-font-color);
    color: var(--sp-font-color);
    display: flex;
    margin: 0;
    outline: none;
    padding: 0.5rem 0.7rem;
    text-align: left;
    width: max-content;
  }
  > option:disabled {
    color: var(--sp-color-disabled);
    opacity: 0.8;
  }
  label {
    color: var(--sp-font-color);
  }
  > .sp-dropdown-content {
    background-color: var(--sp-bg-color);
    border-radius: var(--sp-radius);
    box-shadow: 0px 2px 2px -1px var(--sp-font-color);
    left: 0;
    margin: 1px 0 0;
    min-width: 100%;
    position: absolute;
    top: 103%;
    transform-origin: top;
    transition:
      transform,
      opacity,
      0.2s ease-in;
    transition-delay: 0.2s;
    z-index: 1;
    overflow: visible;
  }
  > .sp-dropdown-content a {
    background-color: var(--sp-bg-color);
    color: var(--sp-font-color);
    cursor: pointer;
    display: flex;
    flex-flow: column;
    float: none;
    margin: 1px 0 0;
    min-width: max-content;
    padding: 0.5rem 0.8rem;
    text-align: left;
    text-decoration: none;
    position: relative;
  }
  > .sp-dropdown-content > *:not(:last-child) {
    box-shadow: 0px -2px 2px -2px var(--sp-font-color) inset;
  }
  > .sp-dropdown-content a:hover:after {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--sp-font-color);
    opacity: 0.1;
    left: 0;
    top: 0;
  }
  /* In case of nested Dropdown */
  > .sp-dropdown-content .sp-dropdown-content {
    position: absolute;
    left: 100%;
    top: 0;
  }
  > .sp-dropdown-content .sp-dropbtn {
    box-shadow: none;
    border-radius: 0;
    margin: 1px 0 1px;
  }
  ${mediaQueries_1.media.xs} {
    &.sp-boxed {
      padding: 0.4em 1em;
    }
  }
`;
