import { WebTarget } from 'styled-components';
import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type LinkType = DefaultProps & Omit<CustomStylingProps, 'unboxed'> & {
    as?: WebTarget;
    boxed?: boolean;
    flexStyle?: ResponsiveStyle;
    href?: string;
    to?: string;
};
/**
 * Link
 * @component
 * @description
 */
export declare function Link(props: LinkType): import("react/jsx-runtime").JSX.Element;
export default Link;
//# sourceMappingURL=Link.d.ts.map