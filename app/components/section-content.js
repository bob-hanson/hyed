import Ember from 'ember';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  classNames: ['section-content'],
  classNameBindings: ['colSpan', 'currentApp.isViewingSecondaryNav:is-viewing-secondary-nav'],
});
