import type { Meta, StoryObj } from '@storybook/react';

import { BaseButton } from './BaseButton';

const meta: Meta<typeof BaseButton> = {
  title: 'Button/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};
