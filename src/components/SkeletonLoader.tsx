// import Skeleton from 'react-loading-skeleton';
//
// import { toStyle } from '../mediaQueries';
import { ResponsiveStyle } from '../type';
import { DefaultProps } from '../utils/type.utils';

// import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonType = DefaultProps & {
  flexStyle?: ResponsiveStyle;
  count?: number;
};

/**
 * SkeletonLoader
 * @description
 * Default component inline loader
 *
 */
export function SkeletonLoader(props: SkeletonType) {
  // const { className, style, count, flexStyle } = props;
  // const width = document.body.clientWidth;
  //
  // const cssResult = !flexStyle ? {} : flexStyle;
  // const { xs, sm, md, lg, xl, ...defaultCSS } = cssResult;
  //
  // const customStyle = toStyle(cssResult, width);
  //
  // return (
  //   <Skeleton
  //     className={className}
  //     count={count}
  //     style={{ ...style, ...defaultCSS, ...customStyle }}
  //   />
  // );
  return <div {...props} />;
}
export default SkeletonLoader;
