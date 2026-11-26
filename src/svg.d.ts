declare module '*.svg?react' {
  import type { FunctionComponent, SVGProps } from 'react';

  const svgComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default svgComponent;
}
