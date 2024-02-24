/** @type { import('@storybook/react').Preview } */
import type { Preview } from '@storybook/react';

const preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} as Preview;

export default preview;
