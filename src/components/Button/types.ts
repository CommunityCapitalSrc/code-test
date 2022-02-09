import { ButtonHTMLAttributes } from 'react';

export interface CommonButtonProps {}

export type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type RawHTMLButtonProps = Omit<HTMLButtonProps, 'children'>;

export type ButtonProps = HTMLButtonProps & CommonButtonProps;
