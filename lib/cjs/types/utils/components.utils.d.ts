import { CSSProperties } from 'react';
import { type DefaultTheme } from 'styled-components';
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
export declare function injectStatusStyle(param: InjectStatusParam): CSSProperties | undefined;
export {};
//# sourceMappingURL=components.utils.d.ts.map