import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import { ButtonStyled, Box } from './ButtonStyled';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'default' | 'danger' | 'success' | 'neutral';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & {
  fullWidth?: boolean;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactNode | null;
  leading?: ReactNode | null;
  trailing?: ReactNode | null;
};

type ButtonWithoutNeutralColorProps = {
  variant?: Extract<ButtonVariant, 'primary'>;
  color?: Exclude<ButtonColor, 'neutral'>;
} & ButtonProps;

type ButtonWithNeutralColorProps = {
  variant?: Exclude<ButtonVariant, 'primary'>;
  color?: ButtonColor;
} & ButtonProps;

type ButtonWithIconProps = {
  icon: ReactElement;
  children?: never;
  leading?: never;
  trailing?: never;
} & ButtonProps;

type ButtonWithoutIconProps = {
  icon?: never;
  leading?: ReactNode | null;
  children: ReactNode | null;
  trailing?: ReactNode | null;
} & ButtonProps;

type ButtonConditionalAppearanceProps = ButtonWithoutNeutralColorProps | ButtonWithNeutralColorProps;
type ButtonConditionalIconProps = ButtonWithIconProps | ButtonWithoutIconProps;

export type SelectedModeProps = ButtonConditionalAppearanceProps & ButtonConditionalIconProps;

export const Button = ({
  disabled = false,
  size = 'md',
  variant = 'primary',
  icon = null,
  leading = null,
  trailing = null,
  children,
  ...props
}: SelectedModeProps): ReactElement => (
  <ButtonStyled
    type="button"
    disabled={disabled}
    {...(disabled && { 'aria-disabled': true })}
    variant={variant}
    data-size={size}
    withIcon={!!icon}
    {...props}
  >
    {leading && (
      <Box data-size={size} data-leading>
        {leading}
      </Box>
    )}
    {icon && !children ? <span>{icon}</span> : children}
    {trailing && (
      <Box data-size={size} data-trailing>
        {trailing}
      </Box>
    )}
  </ButtonStyled>
);

Button.displayName = 'Button';
