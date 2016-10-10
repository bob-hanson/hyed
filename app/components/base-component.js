import Ember from 'ember';

export default Ember.Component.extend({
  currentApp: Ember.inject.service(),
  currentUser: Ember.computed.alias('currentApp.currentUser'),
  modal: Ember.inject.service(),
  repository: Ember.inject.service(),
  layout: Ember.inject.service(),
  isActive: false,
  isSelected: false,
  isEnabled: true,
  isDisabled: Ember.computed.not('isEnabled'),
  percentageWidth: 100,
  bubbles: false,

  colSpan: Ember.computed('percentageWidth', function () {
    return 'column_' + this.get('percentageWidth');
  })

});
