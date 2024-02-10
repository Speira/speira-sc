import {
  ChangeEvent,
  CSSProperties,
  type DragEvent,
  useRef,
  useState,
} from 'react';

import {
  CustomStylingProps,
  propsAdapter,
  useStylingProps,
} from '../hooks/useStylingProps';
import { ResponsiveStyle } from '../type';
import { ensafe } from '../utils/func.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledDragAndDrop } from './styles/StyledDragAndDrop';

type DragType = DragEvent<HTMLDivElement>;

type DragAndDropProps = DefaultProps &
  CustomStylingProps & {
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
export function DragAndDrop(props: DragAndDropProps) {
  const {
    children,
    clickable,
    flexStyle,
    id,
    onDragEnd = () => null,
    onDragOver = () => null,
    onDragStart = () => null,
    onDrop = () => null,
    placeholder,
    stylingProps,
    testId,
    ...rest
  } = propsAdapter({ ...props, status: props.status ?? 'danger' });
  const { className, style } = useStylingProps(stylingProps);
  const uploadRef = useRef<HTMLInputElement>(null);
  const [isDragging, toggleIsDragging] = useState(false);
  const syncClick = () => {
    if (clickable && uploadRef.current) uploadRef.current.click();
  };

  const handleAction = (
    e: DragType | ChangeEvent<HTMLInputElement>,
    callback: (f?: FileList) => void,
    onGoing: boolean,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (!onGoing || onGoing !== isDragging) {
      toggleIsDragging(onGoing);
      const data = 'dataTransfer' in e ? e.dataTransfer : e.target;
      const { files } = data;
      ensafe(callback)(files || undefined);
    }
  };

  const outline: CSSProperties['outline'] = isDragging
    ? '2px solid var(--sp-color-primary)'
    : 'unset';

  return (
    <StyledDragAndDrop
      {...rest}
      id={id}
      $responsive={flexStyle}
      className={className}
      data-testId={testId}
      draggable="true"
      onClick={syncClick}
      onDragEnd={(e: DragType) => handleAction(e, onDragEnd, false)}
      onDragOver={(e: DragType) => handleAction(e, onDragOver, true)}
      onDragStart={onDragStart}
      onDrop={(e: DragType) => handleAction(e, onDrop, false)}
      style={{ ...style, outline }}>
      <span className="sp-placeholder">
        <span style={{ marginRight: '4px' }}>&#10021;</span>
        {placeholder}
      </span>
      {children}
      <input
        className="sp-upload"
        ref={uploadRef}
        type="file"
        onChange={(e) => handleAction(e, onDrop, false)}
      />
    </StyledDragAndDrop>
  );
}

export default DragAndDrop;
