import React, { ReactElement } from 'react';

import { BaseButtonProps } from 'BaseButton';
import { StyledTertiaryButton, StyledLeading, StyledTrailing } from './TertiaryButton.styled';

export type TertiaryButtonSize = 'sm' | 'md' | 'lg';
export type TertiaryButtonVariant = 'default' | 'danger' | 'success' | 'neutral';

export type TertiaryButtonProps = Omit<BaseButtonProps, 'style'> & {
  size?: TertiaryButtonSize;
  variant?: TertiaryButtonVariant;
};

const TertiaryButton = ({
  size = 'md',
  variant = 'default',
  leading = null,
  trailing = null,
  children = null,
  ...props
}: TertiaryButtonProps): ReactElement => (
  <StyledTertiaryButton
    {...props}
    size={size}
    variant={variant}
    leading={leading ? <StyledLeading data-size={size}>{leading}</StyledLeading> : null}
    trailing={trailing ? <StyledTrailing data-size={size}>{trailing}</StyledTrailing> : null}
  >
    {children}
  </StyledTertiaryButton>
);

TertiaryButton.displayName = 'TertiaryButton';

export { TertiaryButton };
