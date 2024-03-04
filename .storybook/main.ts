/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import type { StorybookConfig } from '@storybook/react-webpack5';
import StylexPlugin from '@stylexjs/webpack-plugin';

module.exports = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        /* TODO: investigate solution with infinite actions for button */
        actions: false,
      },
    },
  ], // , '@storybook/addon-interactions'
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
      // propFilter: {
      //   skipPropsWithoutDoc: true,
      // },
    },
  },
  // staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.modules.push('node_modules', 'src', '.storybook');

    config.plugins.push(
      new StylexPlugin({
        filename: 'styles.[contenthash].css',
        dev: config.mode === 'development',
      })
    );

    return config;
  },
} as StorybookConfig;
