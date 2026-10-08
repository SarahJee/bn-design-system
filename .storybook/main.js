import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import twig from 'vite-plugin-twig-drupal';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  stories: ['../docs/**/*.mdx', '../components/**/*.stories.js'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  framework: { name: '@storybook/html-vite', options: {} },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(
      twig({
        // Same namespace Drupal uses for this theme's single directory components,
        // so includes like 'bn_design_system:icon' work in both places.
        namespaces: { bn_design_system: join(root, 'components') },
      }),
    );
    return config;
  },
};
