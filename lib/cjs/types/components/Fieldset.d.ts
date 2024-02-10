import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type FieldsetProps = DefaultProps & CustomStylingProps & {
    legend?: string;
    flexStyle?: ResponsiveStyle;
    position?: 'left' | 'right' | 'center';
    direction?: 'row' | 'column';
};
/**
 * Fieldset
 * @component
 */
export declare function Fieldset(props: FieldsetProps): import("react/jsx-runtime").JSX.Element;
export default Fieldset;
//# sourceMappingURL=Fieldset.d.ts.map