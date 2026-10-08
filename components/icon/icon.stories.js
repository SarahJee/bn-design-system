import Icon from './icon.twig';

const names = ["add-to-cal", "arrow-right", "bookmark", "check", "check-circle", "checkmark", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "close", "cross", "download", "minus", "plus", "reset", "search", "share", "status-approved", "status-cancelled", "status-completed", "status-in-progress", "status-on-hold", "status-pending", "status-proposed", "trash"];

export default {
  title: 'Foundations/Icon',
  component: Icon,
  argTypes: {
    name: { control: 'select', options: names },
    size: { control: { type: 'number', min: 8, max: 64 } },
  },
  args: { name: 'plus', size: 16 },
};

export const Default = {};

export const AllIcons = {
  render: () => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:16px;color:var(--bn-fonts-headings)">
    ${names.map((n) => `<div style="display:flex;flex-direction:column;align-items:center;gap:8px;font:12px/16px var(--font-barlow)">${Icon({ name: n, size: 24 })}<span>${n}</span></div>`).join('')}
  </div>`,
};
