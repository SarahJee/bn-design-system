import Notification from './notification.twig';
import './notification.css';

export default {
  title: 'Components/Notification',
  component: Notification,
  args: { message: 'Your email preferences have been saved.', link_text: 'Go Home', link_url: '#' },
};

export const Positive = {};
