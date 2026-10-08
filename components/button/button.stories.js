import Button from './button.twig';
import './button.css';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'delete', 'download', 'icon', 'tertiary', 'previous', 'next'] },
    button_type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
  args: { label: 'Save changes', variant: 'primary' },
};

export const Primary = {};
export const Delete = { args: { label: 'Delete', variant: 'delete' } };
export const Download = { args: { label: 'Download (PDF)', variant: 'download' } };
export const WithIcon = { name: 'Icon', args: { label: 'Icon', variant: 'icon' } };
export const Tertiary = { args: { label: 'Show more', variant: 'tertiary' } };
export const Previous = { args: { label: 'Previous', variant: 'previous' } };
export const Next = { args: { label: 'Next', variant: 'next' } };
export const AsLink = { name: 'As a link', args: { label: 'Read article', url: '#' } };

export const AllVariants = {
  render: () => `<div style="display:flex;flex-wrap:wrap;gap:16px">
    ${Button({ label: 'Save changes' })}
    ${Button({ label: 'Delete', variant: 'delete' })}
    ${Button({ label: 'Download (PDF)', variant: 'download' })}
    ${Button({ label: 'Icon', variant: 'icon' })}
    ${Button({ label: 'Show more', variant: 'tertiary' })}
    ${Button({ label: 'Previous', variant: 'previous' })}
    ${Button({ label: 'Next', variant: 'next' })}
  </div>`,
};
