import FollowButton from './follow-button.twig';
import './follow-button.css';

export default {
  title: 'Components/Follow button',
  component: FollowButton,
  argTypes: { size: { control: 'select', options: ['default', 'mobile', 'table', 'table-mobile'] } },
  args: { following: false, size: 'default', target: 'Rio Tinto' },
};

export const Follow = {};
export const Following = { args: { following: true } };
export const Mobile = { args: { size: 'mobile' } };
export const Table = { args: { size: 'table' } };
export const TableMobile = { args: { size: 'table-mobile' } };

export const AllStates = {
  render: () => `<div style="display:grid;grid-template-columns:repeat(2,max-content);gap:16px 32px;align-items:center">
    ${['default', 'mobile', 'table', 'table-mobile'].map((s) => FollowButton({ size: s }) + FollowButton({ size: s, following: true })).join('')}
  </div>`,
};
