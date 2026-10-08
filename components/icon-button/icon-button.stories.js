import IconButton from './icon-button.twig';
import './icon-button.css';

export default {
  title: 'Components/Icon button',
  component: IconButton,
  argTypes: {
    icon: { control: 'select', options: ['bookmark', 'share'] },
    size: { control: 'select', options: ['default', 'mobile'] },
  },
  args: { icon: 'bookmark', label: 'Bookmark this article', active: false, size: 'default' },
};

export const Bookmark = {};
export const BookmarkActive = { args: { active: true } };
export const Share = { args: { icon: 'share', label: 'Share this article' } };
export const Mobile = { args: { size: 'mobile' } };

export const AllStates = {
  render: () => `<div style="display:flex;gap:16px;align-items:center">
    ${IconButton({ icon: 'bookmark', label: 'Bookmark' })}
    ${IconButton({ icon: 'bookmark', label: 'Bookmark', active: true })}
    ${IconButton({ icon: 'share', label: 'Share' })}
    ${IconButton({ icon: 'bookmark', label: 'Bookmark', size: 'mobile' })}
    ${IconButton({ icon: 'bookmark', label: 'Bookmark', size: 'mobile', active: true })}
    ${IconButton({ icon: 'share', label: 'Share', size: 'mobile' })}
  </div>`,
};
