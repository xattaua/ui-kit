import React, { ReactElement } from 'react';

import { BaseButtonProps } from 'BaseButton';
import { StyledOutlineButton, StyledLeading, StyledTrailing } from './OutlineButton.styled';

export type OutlineButtonSize = 'sm' | 'md' | 'lg';
export type OutlineButtonVariant = 'default' | 'danger' | 'success' | 'neutral';

export type OutlineButtonProps = Omit<BaseButtonProps, 'style'> & {
  size?: OutlineButtonSize;
  variant?: OutlineButtonVariant;
};

const OutlineButton = ({
  size = 'md',
  variant = 'default',
  leading = null,
  trailing = null,
  children = null,
  ...props
}: OutlineButtonProps): ReactElement => (
  <StyledOutlineButton
    {...props}
    size={size}
    variant={variant}
    leading={leading ? <StyledLeading data-size={size}>{leading}</StyledLeading> : null}
    trailing={trailing ? <StyledTrailing data-size={size}>{trailing}</StyledTrailing> : null}
  >
    {children}
  </StyledOutlineButton>
);

OutlineButton.displayName = 'OutlineButton';

export { OutlineButton };
