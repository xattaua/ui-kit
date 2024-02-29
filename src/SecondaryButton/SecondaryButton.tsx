import React, { ReactElement } from 'react';

import { BaseButtonProps } from 'BaseButton';
import { StyledSecondaryButton, StyledLeading, StyledTrailing } from './SecondaryButton.styled';

export type SecondaryButtonSize = 'sm' | 'md' | 'lg';
export type SecondaryButtonVariant = 'default' | 'danger' | 'success';

export type SecondaryButtonProps = Omit<BaseButtonProps, 'style'> & {
  size?: SecondaryButtonSize;
  variant?: SecondaryButtonVariant;
};

const SecondaryButton = ({
  size = 'md',
  variant = 'default',
  leading = null,
  trailing = null,
  children = null,
  ...props
}: SecondaryButtonProps): ReactElement => (
  <StyledSecondaryButton
    {...props}
    size={size}
    variant={variant}
    leading={leading ? <StyledLeading data-size={size}>{leading}</StyledLeading> : null}
    trailing={trailing ? <StyledTrailing data-size={size}>{trailing}</StyledTrailing> : null}
  >
    {children}
  </StyledSecondaryButton>
);

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton };
