import ActionLink from './action-link.twig';
import './action-link.css';

export default {
  title: 'Components/Action link',
  component: ActionLink,
  argTypes: {
    action: { control: 'select', options: ['revert', 'show-more', 'delete', 'go-back', 'add-to-cal', 'view-all'] },
  },
  args: { label: 'Clear filters', action: 'revert' },
};

export const Revert = {};
export const ShowMore = { args: { label: 'Show 10 more', action: 'show-more' } };
export const Delete = { args: { label: 'Delete all', action: 'delete' } };
export const GoBack = { args: { label: 'Go back', action: 'go-back', url: '#' } };
export const AddToCalendar = { args: { label: 'Add to calendar', action: 'add-to-cal' } };
export const ViewAll = { args: { label: 'View all', action: 'view-all', url: '#' } };

export const AllActions = {
  render: () => `<div style="display:flex;flex-wrap:wrap;gap:24px;align-items:center">
    ${ActionLink({ label: 'Clear filters', action: 'revert' })}
    ${ActionLink({ label: 'Show 10 more', action: 'show-more' })}
    ${ActionLink({ label: 'Delete all', action: 'delete' })}
    ${ActionLink({ label: 'Go back', action: 'go-back' })}
    ${ActionLink({ label: 'Add to calendar', action: 'add-to-cal' })}
    ${ActionLink({ label: 'View all', action: 'view-all' })}
  </div>`,
};
