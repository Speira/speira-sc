import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type CollapseType = DefaultProps & CustomStylingProps & {
    label: string;
    place?: 'center' | 'left' | 'right';
    flexStyle?: ResponsiveStyle;
};
/**
 * Collapse
 * @components
 * @description
 * Collapse content to preserve space
 */
export declare function Collapse(props: CollapseType): import("react/jsx-runtime").JSX.Element;
export default Collapse;
//# sourceMappingURL=Collapse.d.ts.map