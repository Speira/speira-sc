"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDragAndDrop = void 0;
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const Styled_1 = require("./Styled");
/**
 * StyledDragAndDrop
 * @styled-components
 */
exports.StyledDragAndDrop = (0, styled_components_1.styled)(Styled_1.Styled) `
  background-color: var(--sp-bg-color);
  border-radius: var(--sp-radius);
  cursor: move;
  padding: 0.5rem 1rem;
  width: auto;
  .sp-placeholder {
    font-style: italic;
  }
  .sp-upload {
    padding: 0;
    visibility: hidden;
  }
  ${mediaQueries_1.media.xs} {
    padding: 1em 2em;
  }
`;
