import { useCallback, useEffect, useState } from 'react';

import useStylingdProps, {
  CustomStylingProps,
  propsAdapter,
} from '../hooks/useStylingProps';
import { ensafe } from '../utils/func.utils';
import { DefaultProps } from '../utils/type.utils';

import { StyledAlert } from './styles/StyledAlert';
import { StyledButton } from './styles/StyledButton';

const DEFAULT_PROPS = { status: 'danger' };

type AlertType = DefaultProps &
  Omit<CustomStylingProps, 'color' | 'direction' | 'size' | 'unboxed'> & {
    message: string | string[];
    onClose?: () => void;
    title?: string;
  };

/**
 * Alert
 *
 * @example
 * ```jsx
 *   <Alert spreading="soft" status="info" message="Informations" />
 * ```
 * ```jsx
 *   <Alert title="Warning!" status="warning" message={['warning!', 'warning 2']} />
 * ```
 * @components
 */
export function Alert(props: AlertType) {
  const { message, onClose, stylingProps, title, ...rest } =
    propsAdapter(props);
  const { className, style: st } = useStylingdProps(stylingProps);
  const [hasAlert, setHasAlert] = useState(message.length > 0);
  const [disapear, setDisapear] = useState(message.length === 0);

  const onAfterClose = useCallback(() => {
    const timeout = setTimeout(() => {
      setDisapear(true);
      clearTimeout(timeout);
    }, 500);
  }, []);

  const closeAlert = () => {
    setHasAlert(false);
    if (onClose) ensafe(onClose)();
    onAfterClose();
  };

  useEffect(() => {
    const willHaveAlert = message.length > 0;
    if (willHaveAlert) {
      setDisapear(false);
    } else {
      onAfterClose();
    }
    setHasAlert(willHaveAlert);
  }, [message.length, onAfterClose]);

  if (disapear) return null;
  return (
    <StyledAlert {...rest} style={st} className={className} $opened={hasAlert}>
      <div className="sp-content">
        {title && <strong>{title}&nbsp;</strong>}
        {Array.isArray(message) ? (
          <ul>
            {message.map((row) => (
              <li key={row}>{row}</li>
            ))}
          </ul>
        ) : (
          <span className="sp-text-message">{message}</span>
        )}
      </div>
      <StyledButton
        type="button"
        className="sp-close-alert"
        onClick={closeAlert}>
        &#10005;
      </StyledButton>
    </StyledAlert>
  );
}
Alert.defaultProps = DEFAULT_PROPS;

export default Alert;
