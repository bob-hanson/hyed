import Ember from 'ember';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  classNames: ['card-list', 'content-wrap'],
  classNameBindings: ['colSpan'],
  cardObjects: null
});
