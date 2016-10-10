import Ember from 'ember';

export default Ember.Route.extend({
  currentApp: Ember.inject.service(),

  model() {
    return this.store.createRecord('current-user', { firstName: 'Sam', lastName: 'Smith' });
  },

  afterModel(currentUser, transition) {
    this.get('currentApp').set('currentUser', currentUser);
    if (transition.target === 'application.index') {
      this.transitionTo(this.get('currentApp.defaultRoute'), this.get('currentApp.currentClient'));
    }  
  }

});
