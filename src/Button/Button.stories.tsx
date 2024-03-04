import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

const Icon = () => <span>🚀</span>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const PrimaryDanger: Story = {
  name: 'Primary & Danger',
  args: {
    variant: 'primary',
    color: 'danger',
    children: 'Danger',
  },
};

export const PrimarySuccess: Story = {
  name: 'Primary & Success',
  args: {
    variant: 'primary',
    color: 'success',
    children: 'Success',
  },
};

export const SecondaryDefault: Story = {
  name: 'Secondary & Default',
  args: {
    variant: 'secondary',
    color: 'default',
    children: 'Default',
  },
};

export const SecondaryDanger: Story = {
  name: 'Secondary & Danger',
  args: {
    variant: 'secondary',
    color: 'danger',
    children: 'Danger',
  },
};

export const SecondarySuccess: Story = {
  name: 'Secondary & Success',
  args: {
    variant: 'secondary',
    color: 'success',
    children: 'Success',
  },
};

export const SecondaryNeutral: Story = {
  name: 'Secondary & Neutral',
  args: {
    variant: 'secondary',
    color: 'neutral',
    children: 'Success',
  },
};

export const OutlineDefault: Story = {
  name: 'Outline & Default',
  args: {
    variant: 'outline',
    color: 'default',
    children: 'Default',
  },
};

export const OutlineDanger: Story = {
  name: 'Outline & Danger',
  args: {
    variant: 'outline',
    color: 'danger',
    children: 'Danger',
  },
};

export const OutlineSuccess: Story = {
  name: 'Outline & Success',
  args: {
    variant: 'outline',
    color: 'success',
    children: 'Success',
  },
};

export const OutlineNeutral: Story = {
  name: 'Outline & Neutral',
  args: {
    variant: 'outline',
    color: 'neutral',
    children: 'Neutral',
  },
};

export const TertiaryDefault: Story = {
  name: 'Tertiary & Default',
  args: {
    variant: 'tertiary',
    color: 'default',
    children: 'Default',
  },
};

export const TertiaryDanger: Story = {
  name: 'Tertiary & Danger',
  args: {
    variant: 'tertiary',
    color: 'danger',
    children: 'Danger',
  },
};

export const TertiarySuccess: Story = {
  name: 'Tertiary & Success',
  args: {
    variant: 'tertiary',
    color: 'success',
    children: 'Success',
  },
};

export const TertiaryNeutral: Story = {
  name: 'Tertiary & Neutral',
  args: {
    variant: 'tertiary',
    color: 'neutral',
    children: 'Neutral',
  },
};

export const SizeSM: Story = {
  name: 'Size sm',
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const SizeMD: Story = {
  name: 'Size md',
  args: {
    size: 'md',
    children: 'Medium',
  },
};

export const SizeLG: Story = {
  name: 'Size lg',
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const FullWidth: Story = {
  name: 'Full width',
  args: {
    fullWidth: true,
    children: 'Full width',
  },
  parameters: {
    layout: 'default',
  },
};

export const Leading: Story = {
  name: 'With leading',
  args: {
    leading: '🚀',
    children: 'Leading',
  },
};

export const Trailing: Story = {
  name: 'With trailing',
  args: {
    trailing: '🚀',
    children: 'Trailing',
  },
};

export const LeadingAndTrailing: Story = {
  name: 'With leading and trailing',
  args: {
    leading: '🚀',
    trailing: '🚀',
    children: 'Leading and trailing',
  },
};

export const WithIcon: Story = {
  name: 'With icon',
  args: {
    icon: <Icon />,
  },
};
