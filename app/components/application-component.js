import Ember from 'ember';

Ember.LinkComponent.reopen({activeClass: "is-active"});

export default Ember.Component.extend({
  currentApp: Ember.inject.service(),
  classNameBindings: ['currentApp.applicationCssClass']
});
