import Ember from 'ember';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  tagName: 'header',
  classNames: ['section-header'],
  classNameBindings: ['colSpan'],
  pageTitle: Ember.computed.alias('currentApp.currentPageTitle')
});
