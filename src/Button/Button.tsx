import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';

import { styles } from './Button.stylex';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'tertiary';
type ButtonColor = 'default' | 'danger' | 'success' | 'neutral';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: ButtonVariant;
  color?: ButtonColor;
  leading?: ReactNode | null;
  children?: ReactNode | null; // TODO: add required when leading and trailing are null
  trailing?: ReactNode | null;
  fullWidth?: boolean;
};

type ButtonWithoutNeutral = {
  variant: 'primary';
  color: 'default' | 'danger' | 'success';
} & BaseButtonProps;

type ButtonWithNeutral = {
  variant: 'secondary' | 'tertiary' | 'outline';
  color: 'default' | 'danger' | 'success' | 'neutral';
} & BaseButtonProps;

export type SelectedModeProps = ButtonWithoutNeutral | ButtonWithNeutral;

const Button = ({
  variant = 'primary',
  color = 'default',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  children,
  ...props
}: SelectedModeProps): ReactElement => {
  console.log(1);

  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      disabled={disabled}
      {...(disabled && { 'aria-disabled': true })}
      {...stylex.props([
        styles.base,
        styles[`btn-size--${size}`],
        styles[`btn-${variant}--${color}`],
        fullWidth && styles['btn-w--full'],
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
