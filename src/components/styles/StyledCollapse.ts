import { styled } from "styled-components";

import { Styled } from "./Styled";

export const StyledCollapse = styled(Styled)`
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  box-shadow: 0px 1px 2px 0px var(--sp-font-color);
  color: var(--sp-font-color);
  flex-flow: column;
  font-size: 1rem;

  .sp-btn-collapse {
    background-color: transparent;
    border: none;
    box-shadow: 0px 0px 2px -1px var(--sp-font-color);
    color: var(--sp-font-color);
    cursor: pointer;
    display: flex;
    outline: none;
    padding: 18px 0 0;
    place-items: center;
    text-align: left;
    width: 100%;
    padding: 8px;
    justify-content: space-between;
  }
  .sp-btn-collapse:hover {
    transition: opacity, 0.3s;
    opacity: 0.8;
  }
  .sp-btn-collapse.sp-center {
    justify-content: center;
    flex-direction: row;
  }
  .sp-btn-collapse.sp-right {
    flex-direction: row-reverse;
  }

  .sp-content {
    margin: 4px;
    overflow: hidden;
    transition:
      height,
      padding,
      0.3s ease-in-out;
  }

  .sp-expand-icon {
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0px -1px 4px -1px var(--sp-font-color);
    font-size: 14px;
    height: 14px;
    margin: 0;
    padding: 0;
    text-align: center;
    width: 100%;
  }
  .sp-expand-icon:active {
    transform: scale(1);
  }
`;
