"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useStylingProps_1 = __importDefault(require("../hooks/useStylingProps"));
const StyledCard_1 = require("./styles/StyledCard");
const StyledLink_1 = require("./styles/StyledLink");
/**
 * Card
 * @component
 */
function Card(props) {
    const { children, flexStyle, href, id } = props, rest = __rest(props, ["children", "flexStyle", "href", "id"]);
    const { className, style } = (0, useStylingProps_1.default)(props);
    return ((0, jsx_runtime_1.jsx)(StyledLink_1.Linkable, { link: href, children: (0, jsx_runtime_1.jsx)(StyledCard_1.StyledCard, Object.assign({}, rest, { id: id, "$responsive": flexStyle, className: className, style: style, children: children })) }));
}
exports.Card = Card;
exports.default = Card;
