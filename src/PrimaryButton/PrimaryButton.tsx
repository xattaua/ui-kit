import React, { ReactElement } from 'react';

import { BaseButtonProps } from 'BaseButton';
import { StyledPrimaryButton, StyledLeading, StyledTrailing } from './PrimaryButton.styled';

export type PrimaryButtonSize = 'sm' | 'md';
export type PrimaryButtonVariant = 'default' | 'danger' | 'success';

export type PrimaryButtonProps = Omit<BaseButtonProps, 'style'> & {
  size?: PrimaryButtonSize;
  variant?: PrimaryButtonVariant;
};

const PrimaryButton = ({
  size = 'md',
  variant = 'default',
  leading = null,
  trailing = null,
  children = null,
  ...props
}: PrimaryButtonProps): ReactElement => (
  <StyledPrimaryButton
    {...props}
    size={size}
    variant={variant}
    leading={leading ? <StyledLeading data-size={size}>{leading}</StyledLeading> : null}
    trailing={trailing ? <StyledTrailing data-size={size}>{trailing}</StyledTrailing> : null}
  >
    {children}
  </StyledPrimaryButton>
);

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };
