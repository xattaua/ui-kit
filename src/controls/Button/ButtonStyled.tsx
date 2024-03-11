import styled from 'styled-components';
import { ButtonProps, ButtonColor } from './Button';
import { colors, spacings, transitions, typography } from 'tokens';

const getButtonColor = (color: ButtonColor): 'purple' | 'red' | 'green' | 'gray' => {
  switch (color) {
    case 'default':
      return 'purple';
    case 'danger':
      return 'red';
    case 'success':
      return 'green';
    case 'neutral':
      return 'gray';
    default:
      return 'purple';
  }
};

const definedStyles = (color: 'purple' | 'red' | 'green' | 'gray') => ({
  primary: {
    color: colors.white,
    backgroundColor: colors[color][600],

    '&:hover:not(:focus):enabled': {
      color: colors.white,
      backgroundColor: colors[color][700],
    },

    '&:active:not(:disabled)': {
      color: colors.white,
      backgroundColor: colors[color][600],
      boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
    },

    '&:focus:not(:active):not(:disabled)': {
      border: `1px solid ${colors[color][400]}`,
    },

    '&:disabled': {
      color: colors.white,
      backgroundColor: colors[color][200],
    },
  },

  secondary: {
    color: colors[color][700],
    backgroundColor: colors[color][50],

    '&:hover:not(:focus):enabled': {
      color: colors[color][700],
      backgroundColor: colors[color][100],
    },

    '&:active:not(:disabled)': {
      color: colors[color][700],
      backgroundColor: colors[color][50],
      boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
    },

    '&:focus:not(:active):not(:disabled)': {
      border: `1px solid ${colors[color][100]}`,
    },

    '&:disabled': {
      color: colors[color][300],
      backgroundColor: colors[color][25],
    },
  },

  outline: {
    color: colors[color][700],
    backgroundColor: colors.white,
    border: `1px solid ${colors[color][300]}`,

    '&:hover:not(:focus):enabled': {
      color: colors[color][800],
      backgroundColor: colors[color][50],
      border: `1px solid ${colors[color][300]}`,
    },

    '&:active:not(:disabled)': {
      color: colors[color][700],
      backgroundColor: colors.white,
      border: `1px solid ${colors[color][300]}`,
      boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
    },

    '&:focus:not(:active):not(:disabled)': {
      border: `1px solid ${colors[color][100]}`,
    },

    '&:disabled': {
      color: colors[color][300],
      border: `1px solid ${colors[color][200]}`,
    },
  },

  tertiary: {
    color: colors[color][600],
    backgroundColor: 'transparent',

    '&:hover:not(:focus):enabled': {
      color: colors[color][700],
      backgroundColor: colors[color][50],
    },

    '&:active:not(:disabled)': {
      color: colors[color][600],
    },

    '&:focus:not(:active):not(:disabled)': {
      backgroundColor: colors[color][50],
    },

    '&:disabled': {
      color: colors[color][300],
    },
  },
});

type ButtonStyledProps = {
  box?: boolean;
} & ButtonProps;

export const ButtonStyled = styled.button<ButtonStyledProps & { withIcon?: boolean }>(
  ({ withIcon, fullWidth, disabled, color, variant }) => {
    const definedColor = getButtonColor(color);

    return {
      width: fullWidth ? '100%' : 'auto',
      minHeight: '32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid transparent',
      color: colors.black,
      fontFamily: typography.fontFamily,
      borderRadius: '8px',
      margin: 0,
      padding: `0 ${spacings['1x']}`,
      transition: `box-shadow ${transitions.defaultTransition},
               background-color ${transitions.defaultTransition},
               border-color ${transitions.defaultTransition},
               color ${transitions.defaultTransition},
               transform ${transitions.defaultTransition}`,

      appearance: 'none',
      userSelect: 'none',
      ...((disabled && { cursor: 'not-allowed' }) || { cursor: 'pointer' }),

      '&:focus-visible': {
        outline: 'none',
      },

      '&:active:not(:disabled)': {
        transform: 'scale(0.98)',
      },

      "&[data-size='sm']": {
        minWidth: '36px',
        minHeight: '36px',
        fontSize: typography.fsBody3,
        lineHeight: typography.lhBody3,
        fontWeight: typography.fwMedium,
        padding: withIcon ? '0' : `${spacings['3x']} ${spacings['6x']}`,
      },

      "&[data-size='md']": {
        minWidth: '40px',
        minHeight: '40px',
        fontSize: typography.fsBody3,
        lineHeight: typography.lhBody3,
        fontWeight: typography.fwMedium,
        padding: withIcon ? '0' : `${spacings['4x']} ${spacings['7x']}`,
      },

      "&[data-size='lg']": {
        minWidth: '44px',
        minHeight: '44px',
        fontSize: typography.fsBody2,
        lineHeight: typography.lhBody1,
        fontWeight: typography.fwMedium,
        padding: withIcon ? '0' : `${spacings['4x']} ${spacings['8x']}`,
      },

      ...definedStyles(definedColor)[variant],
    };
  }
);

export const Box = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-leading]': {
    marginRight: spacings['3x'],
  },

  '&[data-trailing]': {
    marginLeft: spacings['3x'],
  },

  '&[data-size="sm"]': {
    width: '20px',
    height: '20px',
  },

  '&[data-size="md"]': {
    width: '20px',
    height: '20px',
  },

  '&[data-size="lg"]': {
    width: '20px',
    height: '20px',
  },
});
