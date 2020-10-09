import * as React from 'react';
import { IconProps } from './types';

export const ValueIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M0.877075 7.49985C0.877075 3.84216 3.84222 0.877014 7.49991 0.877014C11.1576 0.877014 14.1227 3.84216 14.1227 7.49985C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49985ZM7.49991 1.82701C4.36689 1.82701 1.82708 4.36683 1.82708 7.49985C1.82708 10.6328 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6328 13.1727 7.49985C13.1727 4.36683 10.6329 1.82701 7.49991 1.82701Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ValueIcon;
