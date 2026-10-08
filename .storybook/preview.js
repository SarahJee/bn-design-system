import '../tokens/tokens.css';
import '../css/base.css';

/** @type { import('@storybook/html').Preview } */
export default {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: {
      default: 'White',
      values: [
        { name: 'White', value: '#ffffff' },
        { name: 'Pale grey (bn-bg-grey)', value: '#e8ebed' },
        { name: 'Dark (bn-brand-dark)', value: '#01293f' },
      ],
    },
  },
};
