import { InputHTMLAttributes, Ref } from 'react';
import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { Primitive } from '../utils/type.utils';
type DefaultInput = 'defaultChecked' | 'defaultValue' | 'id' | 'placeholder' | 'type' | 'value';
type InputAttributes = Pick<InputHTMLAttributes<HTMLInputElement>, DefaultInput>;
type InputProps = CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    isAsync?: boolean;
    onChange: (value?: Primitive) => void;
    onEnterPress?: () => void;
    testId?: string;
    textarea?: boolean;
} & InputAttributes;
/**
 * Input
 * @component
 * @description
 * We can set isAsync at true to improve performance when we want to
 * execute an heavy task on each value update
 */
export declare function Input(props: InputProps, ref: Ref<HTMLInputElement>): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").ForwardRefExoticComponent<CustomStylingProps & {
    flexStyle?: ResponsiveStyle | undefined;
    isAsync?: boolean | undefined;
    onChange: (value?: Primitive | undefined) => void;
    onEnterPress?: (() => void) | undefined;
    testId?: string | undefined;
    textarea?: boolean | undefined;
} & InputAttributes & import("react").RefAttributes<HTMLInputElement>>;
export default _default;
//# sourceMappingURL=Input.d.ts.map