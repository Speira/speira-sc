import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { Size } from '../utils/enum.utils';
import { DefaultProps } from '../utils/type.utils';
type FormProps = DefaultProps & CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    size?: Size;
};
/**
 * Form
 * @component
 */
export declare function Form(props: FormProps): import("react/jsx-runtime").JSX.Element;
export default Form;
//# sourceMappingURL=Form.d.ts.map