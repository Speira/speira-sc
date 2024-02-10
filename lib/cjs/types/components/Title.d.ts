import { ResponsiveStyle } from "../type";
import { DefaultProps } from "../utils/type.utils";
export type TitleType = DefaultProps & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b" | "strong";
    flexStyle?: ResponsiveStyle;
};
/**
 * Title
 * @component
 * @description
 * Main Component for titles
 * `Title` is a styled component that provides a visual title style.
 * and has default styling for the title content.
 *
 * @example
 * ```jsx
 * // Default closed title
 * <Title>This is an title message!</Title>
 * ```
 *
 * @example
 * ```jsx
 * // Opened title using the "open" class
 * <Title className="open">This is an opened title message!</Title>
 * ```
 *
 * @example
 * ```jsx
 * // Alert with title and close button
 * <Title className="open clos">
 *   <strong>Title</strong>
 *   This is an title message with a title and close button!
 *   <button className="close-title">&times;</button>
 * </Title>
 * ```
 *
 * @styled-components
 */
export declare function Title(props: TitleType): import("react/jsx-runtime").JSX.Element;
export default Title;
//# sourceMappingURL=Title.d.ts.map