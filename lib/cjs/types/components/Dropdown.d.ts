import { FunctionComponent, ReactNode } from 'react';
import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type DropdownType = Omit<DefaultProps, 'children'> & CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    label?: string;
    clickable?: boolean;
    children: (v: FunctionComponent<DefaultProps & {
        href?: string;
        onClick?: () => void;
    }>) => ReactNode;
};
/**
 * Dropdown
 * @component
 * @description
 * This is a render function to display customable sub items
 */
export declare function Dropdown(props: DropdownType): import("react/jsx-runtime").JSX.Element;
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map