import Ember from 'ember';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  tagName: 'nav',
  classNames: ['secondary-nav'],
  classNameBindings: ['colSpan']
});
