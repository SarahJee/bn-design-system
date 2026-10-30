import '../tokens/tokens.css';
import '../css/base.css';

/**
 * Brand switch in the toolbar. Sets data-brand on <html>, the same attribute
 * the site uses, so tokens.css picks up that brand's colours and type.
 * Business News is the default (no attribute). Orion uses Business News
 * values until its brand is defined, so it isn't listed yet.
 */
const withBrand = (storyFn, context) => {
  const brand = context.globals.brand;
  if (brand && brand !== 'business-news') {
    document.documentElement.setAttribute('data-brand', brand);
  } else {
    document.documentElement.removeAttribute('data-brand');
  }
  return storyFn();
};

/** @type { import('@storybook/html').Preview } */
export default {
  globalTypes: {
    brand: {
      description: 'Brand',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'business-news', title: 'Business News' },
          { value: 'defence-economy', title: 'Defence Economy' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'business-news',
  },
  decorators: [withBrand],
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    backgrounds: {
      default: 'White',
      values: [
        { name: 'White', value: '#ffffff' },
        { name: 'Pale grey (bn-bg-grey)', value: '#e8ebed' },
        { name: 'Dark (bn-brand-dark)', value: '#01293f' },
        { name: 'Defence Economy canvas (bn-bg-canvas)', value: '#fcfaf8' },
      ],
    },
  },
};
