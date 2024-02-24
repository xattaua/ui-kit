import React, { ReactNode, ReactElement, ButtonHTMLAttributes } from 'react';

export type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
};

export const BaseButton = ({ children }: BaseButtonProps): ReactElement => (
  <button type="button">{children}</button>
);

BaseButton.displayName = 'BaseButton';
