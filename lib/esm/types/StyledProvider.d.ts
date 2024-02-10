import { ReactNode } from "react";
import { ThemeInterface } from "./type";
import "normalize.css";
export type ThemeContextInterface = ThemeInterface & {
    switchToDefault: () => void;
};
type StyledProviderType = {
    children: ReactNode;
};
/**
 * StyledProvider
 * @context
 * @description
 * The Theme Manager
 */
export declare function StyledProvider(props: StyledProviderType): import("react/jsx-runtime").JSX.Element;
export default StyledProvider;
//# sourceMappingURL=StyledProvider.d.ts.map