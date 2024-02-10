import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type ButtonProps = DefaultProps & CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    href?: string;
    label?: string;
    onClick?: () => void;
};
/**
 *
 *  #### **Theme color**
 *  The button color will focus on the `status` prop if present,
 *  if not it will focus on the `className` prop (like "sp-primary")
 *
 */
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map