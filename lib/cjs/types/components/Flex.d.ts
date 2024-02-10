import { ForwardedRef } from 'react';
import { styled } from 'styled-components';
import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type FlexType = DefaultProps & CustomStylingProps & {
    as?: keyof typeof styled;
    flexStyle?: ResponsiveStyle;
    href?: string;
};
/**
 * Flex
 * @component
 * @description
 * Simple and fast implementation of a Flexible component
 * (NB: "flexStyle" is a mobile first improved styling)
 * @example
 *   <Flex
 *      as="section"
 *      flexStyle={{
 *        fontSize: "2em",
 *        md: { width: "50px" }, // for medium screens (and plus)
 *      }
 *   />
 */
export declare function Flex(props: FlexType, ref?: ForwardedRef<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").ForwardRefExoticComponent<DefaultProps & CustomStylingProps & {
    as?: "symbol" | "object" | "style" | "button" | "meter" | "textarea" | "progress" | "text" | "ruby" | "table" | "small" | "sub" | "circle" | "embed" | "pre" | "caption" | "menu" | "menuitem" | "clipPath" | "filter" | "mask" | "marker" | "map" | "div" | "slot" | "title" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "mark" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "sup" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view" | undefined;
    flexStyle?: ResponsiveStyle | undefined;
    href?: string | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=Flex.d.ts.map