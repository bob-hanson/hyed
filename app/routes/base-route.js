import Ember from 'ember';

export default Ember.Route.extend({
  currentApp: Ember.inject.service(),
  currentUser: Ember.computed.alias('currentApp.currentUser'),
  repository: Ember.inject.service(),

  beforeModel(transition) {
    this.get('currentApp').set('currentTarget', transition.targetName);
    this.setPageTitle();
  },

  setPageTitle() {
    const pageTitle = this.get('pageTitle') ? this.get('pageTitle') : this.formatRouteName();
    this.get('currentApp').set('currentPageTitle', pageTitle);
  },

  formatRouteName() {
    return this.get('currentApp.currentTarget')
               .split('-')
               .join(' ')
               .split(' ')
               .map(s => s.charAt(0).toUpperCase() + s.slice(1))
               .join(' ');
  }

});
