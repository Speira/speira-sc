"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSlide = exports.StyledSlideContent = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
const translateinfinite = (p) => (0, styled_components_1.keyframes) `
  100% { 
    transform:translateX(calc(-${p.$range} * ${p.$width} * 2));
  }
`;
exports.StyledSlideContent = styled_components_1.styled.div `
  display: flex;
  justify-content: space-between;
  position: relative;
  transition:
    right,
    left,
    0.4s ease-in-out;
`;
exports.StyledSlide = (0, styled_components_1.styled)(Styled_1.Styled) `
  display: inline;
  overflow-x: hidden;
  position: relative;
  .sp-prev,
  .sp-next {
    -webkit-user-select: none;
    background-color: transparent;
    border: none;
    border-radius: 0 3px 3px 0;
    box-shadow: none;
    color: var(--sp-color-disabled);
    cursor: pointer;
    font-size: 3rem;
    position: absolute;
    top: 25%;
    user-select: none;
    width: auto;
  }
  .sp-prev {
    border-radius: 0 3px 3px 0;
    left: 0;
  }
  .sp-next {
    border-radius: 3px 0 0 3px;
    right: 0;
  }

  .sp-prev:hover,
  .sp-next:hover {
    color: var(--sp-font-color);
  }
  .sp-prev:disabled,
  .sp-next:disabled {
    color: transparent;
    cursor: initial;
  }
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 100%;
  }
  &:after {
    background: linear-gradient(
      to left,
      var(--sp-bg-color) 0%,
      transparent 100%
    );
    top: 0;
    right: 0;
  }
  &:before {
    background: linear-gradient(
      to right,
      var(--sp-bg-color) 0%,
      transparent 100%
    );
    top: 0;
    left: 0;
  }
  &.infinite {
    ${exports.StyledSlideContent} {
      animation: ${(p) => translateinfinite(p)} ${(p) => p.$duration || "8"}s
        linear infinite;
    }
    .sp-prev,
    .sp-next {
      display: none;
    }
  }
`;
