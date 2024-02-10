"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Styled = void 0;
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
/**
 * Styled
 * @styled-components
 *  $responsive = {
 *    fontSize: "2em",
 *    width: "40px",
 *    md: {
 *      // for medium screens (and more)
 *      width: "50px"
 *    },
 *    lg: {
 *      // for large screens (and more)
 *      width: "60px"
 *    }
 *  }
 */
exports.Styled = styled_components_1.styled.div `
  color: var(--sp-font-color);
  display: flex;
  text-decoration: none;
  &:visited {
    color: var(--sp-font-color);
  }
  &&& {
    ${({ $responsive }) => { var _a; return (_a = (0, mediaQueries_1.toStylesheet)($responsive)) !== null && _a !== void 0 ? _a : ""; }}
  }
`;
exports.default = exports.Styled;
