import Checkbox from './checkbox.twig';
import './checkbox.css';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  args: { id: 'terms', label: 'I agree to the', link_text: 'Terms & Conditions', link_url: '#', required: true, checked: false },
};

export const Default = {};
export const Checked = { args: { id: 'terms-2', checked: true } };
export const NotRequired = { args: { id: 'terms-3', required: false } };
