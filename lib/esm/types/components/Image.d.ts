import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type ImageProps = DefaultProps & {
    flexStyle?: ResponsiveStyle;
    alt?: string;
    blur?: boolean;
    fill?: boolean;
    height?: string | number;
    rounded?: boolean;
    size?: string;
    src: string;
    width?: number | string;
};
/**
 * Image
 * @component
 * @description
 * It only uses NextImage component
 */
export declare function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
export default Image;
//# sourceMappingURL=Image.d.ts.map