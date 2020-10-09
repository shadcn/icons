import * as React from 'react';
import { IconProps } from './types';

export const ModulzLogoIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.05 9.76663L3.80556 11.8333 1.05 13.9V9.76663zM1.05 3.98892L3.80556 6.05558 1.05 8.12225V3.98892zM4.42036 1.1L7.17592 3.16667 4.42036 5.23333V1.1zM7.79072 3.98892L10.5463 6.05558 7.79072 8.12225V3.98892zM11.1611 1.1L13.9166 3.16667 11.1611 5.23333V1.1zM11.1611 6.87783L13.9166 8.9445 11.1611 11.0112V6.87783zM3.83889 6.87783V11.0112L1.08333 8.9445 3.83889 6.87783zM7.20925 3.98892V8.12225L4.45369 6.05558 7.20925 3.98892zM3.83889 1.1V5.23333L1.08333 3.16667 3.83889 1.1zM10.5796 1.1V5.23333L7.82406 3.16667 10.5796 1.1zM13.95 3.98892V8.12225L11.1944 6.05558 13.95 3.98892zM13.95 9.76663V13.9L11.1944 11.8333 13.95 9.76663z"
        fill={color}
        stroke={color}
        strokeWidth=".1"
      />
    </svg>
  );
};

export default ModulzLogoIcon;
