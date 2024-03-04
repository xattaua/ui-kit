/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
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

    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              '@stylexjs/babel-plugin',
              {
                dev: true,
                // Set this to true for snapshot testing
                // default: false
                test: false,
                // Required for CSS variable support
                unstable_moduleResolution: {
                  // type: 'commonJS' | 'haste'
                  // default: 'commonJS'
                  type: 'commonJS',
                  // The absolute path to the root directory of your project
                  rootDir: __dirname,
                },
              },
            ],
          ],
          presets: ['@babel/preset-env'],
        },
      },
    });

    config.plugins.push(
      new StylexPlugin({
        filename: 'styles.css',
        dev: config.mode === 'development',
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      })
    );

    return config;
  },
} as StorybookConfig;
