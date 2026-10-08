import Tag from './tag.twig';
import './tag.css';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: { type: { control: 'select', options: ['category', 'sector-briefing', 'sponsored'] } },
  args: { label: 'Property', type: 'category' },
};

export const Category = {};
export const SectorBriefing = { args: { label: 'Sector briefing', type: 'sector-briefing' } };
export const Sponsored = { args: { label: 'Sponsored', type: 'sponsored' }, parameters: { backgrounds: { default: 'Pale grey (bn-bg-grey)' } } };
