"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Linkable = exports.StyledLink = exports.UnstyledLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = require("styled-components");
const mediaQueries_1 = require("../../mediaQueries");
const config = { shouldForwardProp: (p) => p !== "locale" };
/**
 * UnstyledLink
 * @styled-components
 * @description
 * Link with no style
 *
 */
exports.UnstyledLink = styled_components_1.styled.a.withConfig(config) `
  text-decoration: none;
  &:visited {
    color: currentColor;
  }
`;
/**
 * StyledLink
 * @styled-components
 * @description
 * Styled link
 *
 */
exports.StyledLink = styled_components_1.styled.a `
  color: var(--sp-font-color);
  cursor: pointer;
  display: inline-block;

  text-decoration: none;
  &:active {
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.7;
  }
  &.sp-boxed {
    align-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 1px var(--sp-font-color);
    display: inline-flex;
    font-weight: 600;
    padding: 0.4em 0.4em;
    justify-content: center;
    transition: box-shadow 0.2s;
  }
  &.sp-boxed:hover {
    opacity: 0.8;
    transform: translateZ(1em);
    transition: all 0.3s;
  }
  &&& {
    ${({ $responsive }) => { var _a; return (_a = (0, mediaQueries_1.toStylesheet)($responsive)) !== null && _a !== void 0 ? _a : ""; }}
  }
  ${mediaQueries_1.media.xs} {
    &.sp-boxed {
      padding: 0.4em 1em;
    }
  }
`;
/**
 * Linkable
 * @description
 * Allow to turn any component into link
 */
function Linkable(props) {
    const { link, children } = props;
    if (!link)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    return (0, jsx_runtime_1.jsx)(exports.UnstyledLink, { href: link, children: children });
}
exports.Linkable = Linkable;
