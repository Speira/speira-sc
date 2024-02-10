import { CustomStylingProps } from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';
type DragAndDropProps = DefaultProps & CustomStylingProps & {
    clickable?: boolean;
    flexStyle?: ResponsiveStyle;
    onDragEnd?: () => void;
    onDragOver?: () => void;
    onDragStart?: () => void;
    onDrop?: (e?: FileList) => void;
    placeholder?: string;
};
/**
 * DragAndDrop
 * @component
 */
export declare function DragAndDrop(props: DragAndDropProps): import("react/jsx-runtime").JSX.Element;
export default DragAndDrop;
//# sourceMappingURL=DragAndDrop.d.ts.map