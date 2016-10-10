import BaseComponent from './base-component';

export default BaseComponent.extend({
  tagName: 'nav',
  classNames: ['master-navigation', 'primary'],
  classNameBindings: ['currentApp.isFixedNav:open:closed']
});
