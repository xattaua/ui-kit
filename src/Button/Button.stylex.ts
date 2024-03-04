import * as stylex from '@stylexjs/stylex';

import { colors } from 'tokens/colors.stylex';
import { transitions } from 'tokens/transitions.stylex';
import { spacings } from 'tokens/spacings.stylex';
import { typography } from 'tokens/typography.stylex';

export const styles = stylex.create({
  base: {
    minWidth: '65px',
    minHeight: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: '0 4px',
    color: colors.black,
    transition: transitions.defaultTransition,
    borderRadius: '8px',
    // eslint-disable-next-line
    border: '1px solid transparent',
    appearance: 'none',
    userSelect: 'none',
    cursor: {
      default: 'pointer',
      ':disabled': 'not-allowed',
    },
    outline: {
      default: 'none',
      ':focus-visible': 'none',
    },
    transform: {
      ':active:not(:disabled)': 'scale(0.98)',
    },
  },

  'btn-primary--default': {
    color: {
      default: colors.white,
      ':disabled': colors.white,
    },
    backgroundColor: {
      default: colors.purple600,
      ':hover:not(:focus):enabled': colors.purple700,
      ':active:not(:disabled)': colors.purple600,
      ':disabled': colors.purple200,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.purple400,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.purple100}`,
    },
  },

  'btn-primary--danger': {
    color: {
      default: colors.white,
      ':disabled': colors.white,
    },
    backgroundColor: {
      default: colors.red600,
      ':hover:not(:focus):enabled': colors.red700,
      ':active:not(:disabled)': colors.red600,
      ':disabled': colors.red200,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.red400,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.red100}`,
    },
  },

  'btn-primary--success': {
    color: {
      default: colors.white,
      ':disabled': colors.white,
    },
    backgroundColor: {
      default: colors.green600,
      ':hover:not(:focus):enabled': colors.green700,
      ':active:not(:disabled)': colors.green600,
      ':disabled': colors.green200,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.green400,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.green100}`,
    },
  },

  'btn-secondary--default': {
    color: {
      default: colors.purple700,
      ':disabled': colors.purple300,
    },
    backgroundColor: {
      default: colors.purple50,
      ':hover:not(:focus):enabled': colors.purple100,
      ':active:not(:disabled)': colors.purple50,
      ':disabled': colors.purple25,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.purple100}`,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.purple100,
    },
  },

  'btn-secondary--danger': {
    color: {
      default: colors.red700,
      ':disabled': colors.red300,
    },
    backgroundColor: {
      default: colors.red50,
      ':hover:not(:focus):enabled': colors.red100,
      ':active:not(:disabled)': colors.red50,
      ':disabled': colors.red25,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.red100}`,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.red100,
    },
  },

  'btn-secondary--success': {
    color: {
      default: colors.green700,
      ':disabled': colors.green300,
    },
    backgroundColor: {
      default: colors.green50,
      ':hover:not(:focus):enabled': colors.green100,
      ':active:not(:disabled)': colors.green50,
      ':disabled': colors.green25,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.green100}`,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.green100,
    },
  },

  'btn-secondary--neutral': {
    color: {
      default: colors.gray700,
      ':disabled': colors.gray300,
    },
    backgroundColor: {
      default: colors.gray50,
      ':hover:not(:focus):enabled': colors.gray100,
      ':active:not(:disabled)': colors.gray50,
      ':disabled': colors.gray25,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.gray100}`,
    },
    borderColor: {
      ':focus:not(:active):not(:disabled)': colors.gray100,
    },
  },

  'btn-outline--default': {
    color: {
      default: colors.purple700,
      ':hover:not(:focus):enabled': colors.purple800,
      ':active:not(:disabled)': colors.purple700,
      ':disabled': colors.purple300,
    },
    backgroundColor: {
      default: colors.white,
      ':hover:not(:focus):enabled': colors.purple50,
      ':active:not(:disabled)': colors.white,
    },
    borderColor: {
      default: colors.purple300,
      ':hover:not(:focus):enabled': colors.purple300,
      ':active:not(:disabled)': colors.purple300,
      ':focus:not(:active):not(:disabled)': colors.purple100,
      ':disabled': colors.purple200,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.purple100}`,
    },
  },

  'btn-outline--danger': {
    color: {
      default: colors.red700,
      ':hover:not(:focus):enabled': colors.red800,
      ':active:not(:disabled)': colors.red700,
      ':disabled': colors.red300,
    },
    backgroundColor: {
      default: colors.white,
      ':hover:not(:focus):enabled': colors.red50,
      ':active:not(:disabled)': colors.white,
    },
    borderColor: {
      default: colors.red300,
      ':hover:not(:focus):enabled': colors.red300,
      ':active:not(:disabled)': colors.red300,
      ':focus:not(:active):not(:disabled)': colors.red100,
      ':disabled': colors.red200,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.red100}`,
    },
  },

  'btn-outline--success': {
    color: {
      default: colors.green700,
      ':hover:not(:focus):enabled': colors.green800,
      ':active:not(:disabled)': colors.green700,
      ':disabled': colors.green300,
    },
    backgroundColor: {
      default: colors.white,
      ':hover:not(:focus):enabled': colors.green50,
      ':active:not(:disabled)': colors.white,
    },
    borderColor: {
      default: colors.green300,
      ':hover:not(:focus):enabled': colors.green300,
      ':active:not(:disabled)': colors.green300,
      ':focus:not(:active):not(:disabled)': colors.green100,
      ':disabled': colors.green200,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.green100}`,
    },
  },

  'btn-outline--neutral': {
    color: {
      default: colors.gray700,
      ':hover:not(:focus):enabled': colors.gray800,
      ':active:not(:disabled)': colors.gray700,
      ':disabled': colors.gray300,
    },
    backgroundColor: {
      default: colors.white,
      ':hover:not(:focus):enabled': colors.gray50,
      ':active:not(:disabled)': colors.white,
    },
    borderColor: {
      default: colors.gray300,
      ':hover:not(:focus):enabled': colors.gray300,
      ':active:not(:disabled)': colors.gray300,
      ':focus:not(:active):not(:disabled)': colors.gray100,
      ':disabled': colors.gray200,
    },
    boxShadow: {
      ':active:not(:disabled)': `0 0 0 4px ${colors.gray100}`,
    },
  },

  'btn-tertiary--default': {
    color: {
      default: colors.purple600,
      ':hover:not(:focus):enabled': colors.purple700,
      ':active:not(:disabled)': colors.purple600,
      ':disabled': colors.purple300,
    },
    backgroundColor: {
      default: 'transparent',
      ':hover:not(:focus):enabled': colors.purple50,
      ':focus:not(:active):not(:disabled)': colors.purple50,
    },
  },

  'btn-tertiary--danger': {
    color: {
      default: colors.red600,
      ':hover:not(:focus):enabled': colors.red700,
      ':active:not(:disabled)': colors.red600,
      ':disabled': colors.red300,
    },
    backgroundColor: {
      default: 'transparent',
      ':hover:not(:focus):enabled': colors.red50,
      ':focus:not(:active):not(:disabled)': colors.red50,
    },
  },

  'btn-tertiary--success': {
    color: {
      default: colors.green600,
      ':hover:not(:focus):enabled': colors.green700,
      ':active:not(:disabled)': colors.green600,
      ':disabled': colors.green300,
    },
    backgroundColor: {
      default: 'transparent',
      ':hover:not(:focus):enabled': colors.green50,
      ':focus:not(:active):not(:disabled)': colors.green50,
    },
  },

  'btn-tertiary--neutral': {
    color: {
      default: colors.gray600,
      ':hover:not(:focus):enabled': colors.gray700,
      ':active:not(:disabled)': colors.gray600,
      ':disabled': colors.gray300,
    },
    backgroundColor: {
      default: 'transparent',
      ':hover:not(:focus):enabled': colors.gray50,
      ':focus:not(:active):not(:disabled)': colors.gray50,
    },
  },

  'btn-size--sm': {
    minHeight: '32px',
    fontSize: typography.fsBody3,
    lineHeight: typography.lhBody3,
    fontWeight: typography.fwMedium,
    fontFamily: typography.fontFamily,
    padding: `${spacings['1x']} ${spacings['2x']}`,
  },

  'btn-size--md': {
    minHeight: '32px',
    fontSize: typography.fsBody2,
    lineHeight: typography.lhBody2,
    fontWeight: typography.fwMedium,
    fontFamily: typography.fontFamily,
    padding: `${spacings['2x']} ${spacings['4x']}`,
  },

  'btn-size--lg': {
    minHeight: '44px',
    fontSize: typography.fsBody1,
    lineHeight: typography.lhBody1,
    fontWeight: typography.fwMedium,
    fontFamily: typography.fontFamily,
    padding: `${spacings['2x']} ${spacings['5x']}`,
  },

  'btn-w--full': {
    minWidth: '100%',
  },
});
