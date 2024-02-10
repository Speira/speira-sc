import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type CardType = DefaultProps & CustomStylingProps & {
    flexStyle?: ResponsiveStyle;
    height?: string;
    href?: string;
    width?: string;
};
/**
 * Card
 * @component
 */
export declare function Card(props: CardType): import("react/jsx-runtime").JSX.Element;
export default Card;
//# sourceMappingURL=Card.d.ts.map