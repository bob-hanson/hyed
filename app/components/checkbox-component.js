import Ember from 'ember';

export default Ember.Component.extend({
  label: 'no label',
  classNameBindings: ['checkboxColor', 'isSelected:is-selected'],

  checkboxAction: 'checkboxAction',
  click() {
    this.toggleProperty('isSelected');
    this.sendAction('checkboxAction');
  }

});
