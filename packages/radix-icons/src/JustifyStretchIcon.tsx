import * as React from 'react';
import { IconProps } from './types';

export const JustifyStretchIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.5 1.04956C13.7485 1.04956 13.95 1.25103 13.95 1.49956L13.95 13.4996C13.95 13.7481 13.7485 13.9496 13.5 13.9496C13.2515 13.9496 13.05 13.7481 13.05 13.4996L13.05 1.49956C13.05 1.25103 13.2515 1.04956 13.5 1.04956ZM1.49998 1.04966C1.74851 1.04966 1.94998 1.25113 1.94998 1.49966L1.94998 13.4997C1.94998 13.7482 1.74851 13.9497 1.49998 13.9497C1.25145 13.9497 1.04998 13.7482 1.04998 13.4997L1.04998 1.49966C1.04998 1.25113 1.25145 1.04966 1.49998 1.04966ZM4.00001 6L11 6L11 9L4.00001 9L4.00001 6ZM11.25 5C11.6642 5 12 5.33579 12 5.75L12 9.25C12 9.66421 11.6642 10 11.25 10L3.75001 10C3.33579 10 3.00001 9.66421 3.00001 9.25L3.00001 5.75C3.00001 5.33579 3.33579 5 3.75001 5L11.25 5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default JustifyStretchIcon;