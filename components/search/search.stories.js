import Search from './search.twig';
import './search.css';

export default {
  title: 'Forms/Search',
  component: Search,
  args: {},
};

export const Default = {};
export const WithTerm = { args: { id: 'bn-search-2', value: 'Rio Tinto' } };
