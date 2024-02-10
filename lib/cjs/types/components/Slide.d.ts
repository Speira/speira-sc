import { ResponsiveStyle } from "../type";
import { Size } from "../utils/enum.utils";
import { DefaultProps } from "../utils/type.utils";
type SlideType = DefaultProps & {
    flexStyle?: ResponsiveStyle;
    range?: number;
    hideAfter?: Size;
    duration?: number;
};
/**
 * Slide
 * @component
 * @description
 * Component to display elements using a slide animation
 */
export declare function Slide(props: SlideType): import("react/jsx-runtime").JSX.Element;
export default Slide;
//# sourceMappingURL=Slide.d.ts.map