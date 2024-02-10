import { ResponsiveStyle } from "../type";
import { DefaultProps } from "../utils/type.utils";

import { StyledLoader } from "./styles/StyledLoader";

type LoaderType = DefaultProps & {
  flexStyle?: ResponsiveStyle;
};

/**
 * Loader
 * @component
 * @description
 * The main loading component
 *
 */
export function Loader(props: LoaderType) {
  const { className, flexStyle, id, style } = props;
  return (
    <StyledLoader
      id={id}
      className={className}
      style={style}
      $responsive={flexStyle}
    >
      <div className="sp-loader" />
    </StyledLoader>
  );
}
export default Loader;
