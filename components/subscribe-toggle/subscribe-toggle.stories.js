import Toggle from './subscribe-toggle.twig';
import './subscribe-toggle.css';

export default {
  title: 'Components/Subscribe toggle',
  component: Toggle,
  args: { subscribed: true, name: 'Morning Edition' },
};

export const Subscribed = {};
export const NotSubscribed = { args: { subscribed: false } };
