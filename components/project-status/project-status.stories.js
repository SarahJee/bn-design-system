import Status from './project-status.twig';
import './project-status.css';

const statuses = ['completed', 'on-hold', 'cancelled', 'proposed', 'pending', 'approved', 'in-progress'];

export default {
  title: 'Components/Project status',
  component: Status,
  argTypes: {
    status: { control: 'select', options: statuses },
    size: { control: 'select', options: ['default', 'mobile'] },
  },
  args: { status: 'completed', size: 'default' },
};

export const Default = {};
export const AllStatuses = {
  render: () => `<div style="display:flex;flex-wrap:wrap;gap:8px">${statuses.map((s) => Status({ status: s })).join('')}</div>`,
};
