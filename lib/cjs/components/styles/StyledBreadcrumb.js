"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledBreadcrumb = exports.StyledBreadItem = void 0;
const styled_components_1 = require("styled-components");
const Styled_1 = require("./Styled");
exports.StyledBreadItem = (0, styled_components_1.styled)(Styled_1.Styled).attrs(() => ({ as: 'li' })) `
  display: inline;
  font-weight: bold;

  &:not(:nth-child(1)):before {
    content: '\\02c3';
    color: var(--sp-color-muted);
    padding: 0 8px;
  }
  a {
    color: var(--sp-color-muted);
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    color: var(--sp-color-dark);
    text-decoration: underline;
  }
  .sp-current {
    color: var(--sp-color-dark);
  }
`;
/**
 * StyledBreadcrumb
 * @styled-components
 */
exports.StyledBreadcrumb = (0, styled_components_1.styled)(Styled_1.Styled).attrs(() => ({ as: 'ul' })) `
  display: flex;
  font-size: 0.9rem;
  list-style: none;
  padding: 10px 16px;
`;
