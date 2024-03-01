import styled from 'styled-components';

import { BaseButton } from 'BaseButton';
import { TertiaryButtonProps } from 'TertiaryButton';

import { colors, transitions, typography, spacings } from 'styles';

const getVariant = (variant: TertiaryButtonProps['variant']) => {
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

const StyledTertiaryButton = styled(BaseButton)<TertiaryButtonProps>(({ size, variant }) => {
  const color = getVariant(variant);

  return {
    color: colors[color][600],
    backgroundColor: 'transparent',
    transition: `all ${transitions.defaultTransition}`,

    '&:hover:not(:focus):enabled': {
      color: colors[color][700],
      backgroundColor: colors[color][50],
    },

    '&:active:not(:disabled)': {
      color: colors[color][600],
      transform: 'scale(0.98)',
    },

    '&:focus:not(:active):not(:disabled)': {
      backgroundColor: colors[color][50],
    },

    '&:disabled': {
      color: colors[color][300],
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

export { StyledTertiaryButton, StyledLeading, StyledTrailing };
