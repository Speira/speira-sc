import { keyframes, styled } from 'styled-components';

import { Styled } from './Styled';

type SProps = { $range: number; $width?: string; $duration?: number };

const translateinfinite = (p: SProps) => keyframes`
  100% { 
    transform:translateX(calc(-${p.$range} * ${p.$width} * 2));
  }
`;

export const StyledSlideContent = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  transition:
    right,
    left,
    0.4s ease-out;
`;

export const StyledSlide = styled(Styled)<SProps>`
  border-radius: var(--sp-radius);
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  padding: 3rem 4px;
  position: relative;
  .sp-prev,
  .sp-next {
    -webkit-user-select: none;
    background-color: transparent;
    border: none;
    border-radius: 0 3px 3px 0;
    box-shadow: none;
    cursor: pointer;
    font-size: 3rem;
    opacity: 0.5;
    padding: 0;
    position: absolute;
    top: 39%;
    transition: 0.3s, ease-out;
    transition-delay: 0.2s;
    user-select: none;
    width: auto;
  }
  .sp-prev {
    border-radius: 0 3px 3px 0;
    left: 0;
    margin: 0 0 0 24px;
  }
  .sp-next {
    border-radius: 3px 0 0 3px;
    margin: 0 24px 0 0;
    right: 0;
  }
  .sp-prev:hover,
  .sp-next:hover {
    opacity: 1;
    color: var(--sp-font-color);
  }
  .sp-prev:disabled,
  .sp-next:disabled {
    cursor: initial;
    opacity: 0;
  }
  &:after,
  &:before {
    z-index: 1;
    content: ' ';
    height: 100%;
    position: absolute;
    width: 1rem;
  }
  &:after {
    background: linear-gradient(
      to left,
      var(--sp-bg-color) 0%,
      transparent 100%
    );
    right: 0;
    top: 0;
  }
  &:before {
    background: linear-gradient(
      to right,
      var(--sp-bg-color) 0%,
      transparent 100%
    );
    left: 0;
    top: 0;
  }
  &.infinite {
    ${StyledSlideContent} {
      animation: ${(p) => translateinfinite(p)} ${(p) => p.$duration}s linear
        infinite;
    }
    .sp-prev,
    .sp-next {
      display: none;
    }
  }
`;
