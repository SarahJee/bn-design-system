import TagFilter from './tag-filter.twig';
import './tag-filter.css';

export default {
  title: 'Components/Tag filter',
  component: TagFilter,
  args: { label: 'Government', active: false },
};

export const Inactive = {};
export const Active = { args: { active: true } };
