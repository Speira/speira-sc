import { styled } from 'styled-components';

import { Styled } from './Styled';

/* The dropdown container */
export const StyledDropdown = styled(Styled)`
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
    min-width: max-content;
    outline: none;
    padding: 0.5rem 0.7rem;
    text-align: left;
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
    display: inline-flex;
    flex-direction: column;
    left: 0;
    margin: 1px 0 0;
    min-width: 100%;
    overflow: visible;
    position: absolute;
    top: 103%;
    transform-origin: top;
    transition:
      transform,
      opacity,
      0.2s ease-in;
    transition-delay: 0.2s;
    z-index: 1;
  }
  > .sp-dropdown-content .sp-option {
    background-color: var(--sp-bg-color);
    color: var(--sp-font-color);
    cursor: pointer;
    display: flex;
    flex-flow: column;
    float: none;
    margin: 1px 0 0;
    min-width: max-content;
    padding: 0.5rem 0.8rem;
    position: relative;
    text-align: left;
    text-decoration: none;
  }
  > .sp-dropdown-content > *:not(:last-child) {
    box-shadow: 0px -2px 2px -2px var(--sp-font-color) inset;
  }
  > .sp-dropdown-content .sp-option:hover:after {
    background-color: var(--sp-font-color);
    content: ' ';
    height: 100%;
    left: 0;
    opacity: 0.1;
    position: absolute;
    top: 0;
    width: 100%;
  }
  /* In case of nested Dropdown */
  > .sp-dropdown-content .sp-dropdown-content {
    left: 100%;
    text-align: left;
    position: absolute;
    top: 0;
  }
  > .sp-dropdown-content .sp-dropbtn {
    border-radius: 0;
    box-shadow: none;
    margin: 1px 0 1px;
    place-content: flex-start;
  }
`;
