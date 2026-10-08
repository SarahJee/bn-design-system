import Field from './form-field.twig';
import './form-field.css';

export default {
  title: 'Forms/Form field',
  component: Field,
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'tel', 'url', 'number', 'textarea', 'select'] },
    size: { control: 'select', options: ['default', 'mobile'] },
  },
  args: { id: 'field-1', label: 'Label', help_text: 'Help text', placeholder: 'Optional prompt...', required: true, type: 'text' },
};

export const Default = {};
export const Filled = { args: { value: 'Entered Text' } };
export const TextArea = { args: { id: 'field-2', type: 'textarea' } };
export const Select = {
  args: {
    id: 'field-3',
    type: 'select',
    value: 'en',
    options: [
      { value: 'en', label: 'English' },
      { value: 'fr', label: 'French' },
    ],
  },
};
export const Mobile = { args: { id: 'field-4', size: 'mobile' } };
