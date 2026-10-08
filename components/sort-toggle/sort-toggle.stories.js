import SortToggle from './sort-toggle.twig';
import './sort-toggle.css';

export default {
  title: 'Components/Sort toggle',
  component: SortToggle,
  argTypes: { size: { control: 'select', options: ['default', 'mobile'] } },
  args: { name: 'sort', value: 'date', size: 'default' },
};

export const Default = {};
export const RelevanceSelected = { args: { name: 'sort-2', value: 'relevance' } };
export const Mobile = { args: { name: 'sort-3', size: 'mobile' } };
