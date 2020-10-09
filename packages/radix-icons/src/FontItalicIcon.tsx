import * as React from 'react';
import { IconProps } from './types';

export const FontItalicIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M5.675 3.50017C5.675 3.25164 5.87647 3.05017 6.125 3.05017H10.625C10.8735 3.05017 11.075 3.25164 11.075 3.50017C11.075 3.7487 10.8735 3.95017 10.625 3.95017H9.00594L7.23097 11.05H8.87499C9.12352 11.05 9.32499 11.2515 9.32499 11.5C9.32499 11.7486 9.12352 11.95 8.87499 11.95H4.37499C4.12646 11.95 3.92499 11.7486 3.92499 11.5C3.92499 11.2515 4.12646 11.05 4.37499 11.05H5.99403L7.769 3.95017H6.125C5.87647 3.95017 5.675 3.7487 5.675 3.50017Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default FontItalicIcon;
