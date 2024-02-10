import { CSSProperties } from 'react';
import { CSSProp, type DefaultTheme } from 'styled-components';

import { Spreading, Status } from './enum.utils';

type InjectStatusParam = {
  status?: Status;
  spreading?: Spreading;
  theme: DefaultTheme;
};

/**
 * @description
 * Generate generic inline style based on the status to be used in the style attribute
 */
export function injectStatusStyle(param: InjectStatusParam) {
  const { status, spreading, theme } = param;

  if (!status) return null;

  const style: CSSProp = {};
  if (spreading === 'hollow') {
    style['--sp-bg-color'] = 'transparent';
    style['--sp-font-color'] = theme.colors[status];
  } else if (spreading === 'soft') {
    style['--sp-bg-color'] = theme.colors[`${status}_soft`];
    style['--sp-font-color'] = theme.colors[status];
  } else if (spreading === 'silent') {
    style['--sp-bg-color'] = 'transparent';
    style['--sp-font-color'] = theme.colors[`${status}_soft`];
  } else {
    style['--sp-bg-color'] = theme.colors[status];
    style['--sp-font-color'] = theme.colors.light;
  }
  return style as CSSProperties;
}
