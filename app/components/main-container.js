import Ember from 'ember';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  eventWatch: Ember.inject.service(),
  renderElement: Ember.on('didInsertElement', function () {
    this._super();
    this.get('eventWatch').setupScrollWatch();
  }),

  removeElement: Ember.on('willDestroyElement', function () {
    this._super();
    this.get('eventWatch').teardownScrollWatch();
  })
});
