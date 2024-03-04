import * as stylex from '@stylexjs/stylex';

export const transitions = stylex.defineVars({
  defaultTransition: '0.45s cubic-bezier(0.3, 1, 0.4, 1) 0s' as const,
});
