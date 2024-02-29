import type { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Button/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

const VariantTemplate: Story = {
  args: {
    children: 'Caption',
  },
  argTypes: {
    variant: { table: { disable: true } },
  },
};

const SizeTemplate: Story = {
  args: {
    children: 'Caption',
  },
  argTypes: {
    size: { table: { disable: true } },
  },
};

export const Default: Story = {
  ...VariantTemplate,
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Danger: Story = {
  ...VariantTemplate,
  args: {
    variant: 'danger',
    children: 'Danger',
  },
};

export const Success: Story = {
  ...VariantTemplate,
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Small: Story = {
  name: 'Size SM',
  ...SizeTemplate,
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Medium: Story = {
  name: 'Size MD',
  ...SizeTemplate,
  args: {
    size: 'md',
    children: 'Medium',
  },
};

export const Large: Story = {
  name: 'Size LG',
  ...SizeTemplate,
  args: {
    // size: 'lg',
    children: 'Large',
  },
};

export const WithLeading: Story = {
  name: 'Leading',
  args: {
    leading: '🚀',
    children: 'Leading',
  },
};

export const WithTrailing: Story = {
  name: 'Trailing',
  args: {
    trailing: '🚀',
    children: 'Trailing',
  },
};

export const WithLeadingAndTrailing: Story = {
  name: 'Leading & Trailing',
  args: {
    leading: '🚀',
    trailing: '🚀',
    children: 'Leading and Trailing',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
