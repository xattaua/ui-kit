import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { props as sxProps } from '@stylexjs/stylex';

import { styles } from './Button.stylex';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'tertiary';
type ButtonColor = 'default' | 'danger' | 'success' | 'neutral';
type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: ReactElement | null;
  leading?: ReactNode | null;
  children?: ReactNode | null;
  trailing?: ReactNode | null;
  fullWidth?: boolean;
};

type ButtonWithoutNeutralProps = {
  variant?: Extract<ButtonVariant, 'primary'>;
  color?: Exclude<ButtonColor, 'neutral'>;
} & BaseButtonProps;

type ButtonWithNeutralProps = {
  variant?: Exclude<ButtonVariant, 'primary'>;
  color?: ButtonColor;
} & BaseButtonProps;

type ButtonWithIconProps = {
  icon: ReactElement;
  children?: never;
  leading?: never;
  trailing?: never;
} & BaseButtonProps;

type ButtonWithoutIconProps = {
  icon?: never;
  leading?: ReactNode | null;
  children: ReactNode | null;
  trailing?: ReactNode | null;
} & BaseButtonProps;

type ButtonConditionalAppearanceProps = ButtonWithoutNeutralProps | ButtonWithNeutralProps;
type ButtonConditionalIconProps = ButtonWithIconProps | ButtonWithoutIconProps;

export type SelectedModeProps = ButtonConditionalAppearanceProps & ButtonConditionalIconProps;

const Button = ({
  variant = 'primary',
  color = 'default',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  children,
  icon = null,
  leading = null,
  trailing = null,
  ...props
}: SelectedModeProps): ReactElement => {
  const iconStyles = [styles['btn-box'], styles[`btn-box--${size}`], styles[`icon-size--${size}`]];
  const leadingStyles = [styles['btn-box'], styles[`btn-box--${size}`], styles.leading];
  const trailingStyles = [styles['btn-box'], styles[`btn-box--${size}`], styles.trailing];

  return (
    <button
      type={type}
      disabled={disabled}
      {...(disabled && { 'aria-disabled': true })}
      {...sxProps([
        styles.btn,
        styles[`btn-size--${size}`],
        styles[`btn-${variant}--${color}`],
        icon && styles[`btn-icon--${size}`],
        fullWidth && styles['btn--fullWidth'],
      ])}
      {...props}
    >
      {leading && <span {...sxProps([...leadingStyles])}>{leading}</span>}
      {children || <span {...sxProps([...iconStyles])}>{icon}</span>}
      {trailing && <span {...sxProps(...trailingStyles)}>{trailing}</span>}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
