import styled from 'styled-components';

import { BaseButton } from 'BaseButton';
import { PrimaryButtonProps } from 'PrimaryButton';

import { colors, transitions, typography, spacings } from 'styles';

const getVariant = (variant: PrimaryButtonProps['variant']) => {
  switch (variant) {
    case 'default':
      return 'gray';
    case 'danger':
      return 'red';
    case 'success':
      return 'green';
    default:
      return 'purple';
  }
};

const StyledPrimaryButton = styled(BaseButton)<PrimaryButtonProps>(({ size, variant }) => {
  const color = getVariant(variant);

  return {
    color: colors.white,
    backgroundColor: colors[color][600],
    transition: `all ${transitions.standard}`,

    '&:hover:not(:focus):enabled': {
      color: colors.white,
      backgroundColor: colors[color][700],
    },

    '&:active:not(:disabled)': {
      color: colors.white,
      backgroundColor: colors[color][600],
      transform: 'scale(0.98)',
      boxShadow: `0px 0px 0px 4px ${colors[color][100]}`,
    },

    '&:focus:not(:active):not(:disabled)': {
      border: `1px solid ${colors[color][400]}`,
    },

    '&:disabled': {
      color: colors.white,
      backgroundColor: colors[color][200],
    },

    ...(size === 'sm' && {
      minHeight: '32px',
      font: typography.body3,
      padding: `${spacings.sp1} ${spacings.sp2}`,
    }),

    ...(size === 'md' && {
      minHeight: '38px',
      font: typography.body2,
      padding: `${spacings.sp2} ${spacings.sp4}`,
    }),

    ...(size === 'lg' && {
      minHeight: '44px',
      font: typography.body1,
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

export { StyledPrimaryButton, StyledLeading, StyledTrailing };
