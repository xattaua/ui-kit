import styled from 'styled-components';

import { BaseButton } from 'BaseButton';
import { OutlineButtonProps } from 'OutlineButton';

import { colors, transitions, typography, spacings } from 'styles';

const getVariant = (variant: OutlineButtonProps['variant']) => {
  switch (variant) {
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

const StyledOutlineButton = styled(BaseButton)<OutlineButtonProps>(({ size, variant }) => {
  const color = getVariant(variant);

  return {
    color: colors[color][700],
    backgroundColor: colors.white,
    border: `1px solid ${colors[color][300]}`,
    transition: `all ${transitions.defaultTransition}`,

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
      transform: 'scale(0.98)',
    },

    '&:focus:not(:active):not(:disabled)': {
      border: `1px solid ${colors[color][100]}`,
    },

    '&:disabled': {
      color: colors[color][300],
      border: `1px solid ${colors[color][200]}`,
    },

    ...(size === 'sm' && {
      minHeight: '32px',
      font: typography.body3,
      fontWeight: 500,
      padding: `${spacings.sp1} ${spacings.sp2}`,
    }),

    ...(size === 'md' && {
      minHeight: '38px',
      font: typography.body2,
      fontWeight: 500,
      padding: `${spacings.sp2} ${spacings.sp4}`,
    }),

    ...(size === 'lg' && {
      minHeight: '44px',
      font: typography.body1,
      fontWeight: 500,
      padding: `${spacings.sp2} ${spacings.sp5}`,
    }),
  };
});

const StyledLeading = styled.span({
  '&[data-size="sm"]': {
    marginRight: spacings.sp2,
  },
  '&[data-size="md"]': {
    marginRight: spacings.sp3,
  },
  '&[data-size="lg"]': {
    marginRight: spacings.sp3,
  },
});

const StyledTrailing = styled.span({
  '&[data-size="sm"]': {
    marginLeft: spacings.sp2,
  },
  '&[data-size="md"]': {
    marginLeft: spacings.sp3,
  },
  '&[data-size="lg"]': {
    marginLeft: spacings.sp3,
  },
});

export { StyledOutlineButton, StyledLeading, StyledTrailing };
