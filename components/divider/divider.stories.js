import Divider from './divider.twig';
import './divider.css';

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: { style: { control: 'select', options: ['solid', 'dashed', 'stub', 'vertical'] } },
  args: { style: 'solid' },
};

export const Solid = {};
export const Dashed = { args: { style: 'dashed' } };
export const Stub = { args: { style: 'stub' } };
export const Vertical = { args: { style: 'vertical' } };
