import * as React from 'react';
import { IconProps } from './types';

export const PaperPlaneIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.20307 1.04312C1.00481 0.954998 0.77234 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568116 1.75196L3.92115 7.50002L0.568116 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.77234 13.9952 1.00481 14.045 1.20307 13.9569L14.7031 7.95692C14.8836 7.87667 15 7.69761 15 7.50002C15 7.30242 14.8836 7.12336 14.7031 7.04311L1.20307 1.04312ZM4.84552 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22091 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22091 7.10002 9 7.10002H4.84552Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PaperPlaneIcon;
