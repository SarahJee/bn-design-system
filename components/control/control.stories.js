import Control from './control.twig';
import './control.css';

export default {
  title: 'Components/Control',
  component: Control,
  argTypes: { direction: { control: 'select', options: ['down', 'up'] } },
  args: { direction: 'down', label: 'Show more' },
};

export const Down = {};
export const Up = { args: { direction: 'up', label: 'Show less' } };
