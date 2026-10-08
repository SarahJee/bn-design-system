import Radio from './radio.twig';
import './radio.css';

export default {
  title: 'Forms/Radio',
  component: Radio,
  args: { id: 'opt-1', name: 'options', label: 'Item name', link_text: 'Optional link', link_url: '#', checked: false },
};

export const Default = {};
export const Selected = { args: { id: 'opt-2', checked: true } };

export const Group = {
  render: () => `<fieldset style="border:0;padding:0;margin:0;display:flex;flex-direction:column;gap:8px">
    <legend style="font:600 17px/24.82px var(--font-barlow);color:var(--bn-fonts-links);margin-bottom:8px">Delivery</legend>
    ${Radio({ id: 'g-1', name: 'delivery', label: 'Email', checked: true })}
    ${Radio({ id: 'g-2', name: 'delivery', label: 'Print' })}
  </fieldset>`,
};
