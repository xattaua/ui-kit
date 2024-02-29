import React, { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leading?: ReactNode | null;
  children?: ReactNode | null;
  trailing?: ReactNode | null;
};

const StyledBaseButton = styled.button<BaseButtonProps>(({ disabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  color: '#222',
  minWidth: '65px',
  minHeight: '32px',
  borderRadius: '8px',
  margin: 0,
  padding: '0 4px',
  appearance: 'none',
  userSelect: 'none',
  ...((disabled && { cursor: 'not-allowed' }) || { cursor: 'pointer' }),

  '&:focus-visible': {
    outline: 'none',
  },
}));

const BaseButton = ({
  disabled = false,
  children,
  leading,
  trailing,
  ...props
}: BaseButtonProps): ReactElement => (
  <StyledBaseButton
    type="button"
    disabled={disabled}
    {...(disabled && { 'aria-disabled': true })}
    {...props}
  >
    {leading}
    {children}
    {trailing}
  </StyledBaseButton>
);

BaseButton.displayName = 'BaseButton';

export { BaseButton };
