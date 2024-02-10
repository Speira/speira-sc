/// <reference types="react" />
import { ResponsiveStyle } from "../../type";
type Responsive = {
    $responsive?: ResponsiveStyle;
};
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
export declare const Styled: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Responsive>>;
export default Styled;
//# sourceMappingURL=Styled.d.ts.map