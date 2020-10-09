import * as React from 'react';
import { IconProps } from './types';

export const AvatarIcon = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" {...props}>
      <path
        d="M1.12704 7.49991C1.12704 3.98029 3.98026 1.12708 7.49988 1.12708C11.0195 1.12708 13.8727 3.98029 13.8727 7.49991C13.8727 11.0195 11.0195 13.8727 7.49988 13.8727C3.98026 13.8727 1.12704 11.0195 1.12704 7.49991ZM7.49988 2.07708C4.50493 2.07708 2.07704 4.50496 2.07704 7.49991C2.07704 8.88543 2.59666 10.1496 3.45166 11.1082C4.35361 9.84766 5.83058 9.02502 7.50023 9.02502C9.16969 9.02502 10.6465 9.84747 11.5485 11.1077C12.4032 10.1492 12.9227 8.88521 12.9227 7.49991C12.9227 4.50497 10.4948 2.07708 7.49988 2.07708ZM10.8486 11.7655C10.1261 10.6852 8.89583 9.97503 7.50023 9.97503C6.10447 9.97503 4.87404 10.6853 4.15162 11.7659C5.07358 12.4905 6.23626 12.9227 7.49988 12.9227C8.7637 12.9227 9.92656 12.4904 10.8486 11.7655ZM5.14999 6.50491C5.14999 5.20704 6.20212 4.15491 7.49999 4.15491C8.79786 4.15491 9.84999 5.20704 9.84999 6.50491C9.84999 7.80278 8.79786 8.85491 7.49999 8.85491C6.20212 8.85491 5.14999 7.80278 5.14999 6.50491ZM7.49999 5.10491C6.72679 5.10491 6.09999 5.73171 6.09999 6.50491C6.09999 7.27811 6.72679 7.90491 7.49999 7.90491C8.27319 7.90491 8.89999 7.27811 8.89999 6.50491C8.89999 5.73171 8.27319 5.10491 7.49999 5.10491Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default AvatarIcon;
