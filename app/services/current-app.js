import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: {},
  currentClient: 1,
  currentLocation: { id: 1, locationName: 'American Indian Health & Services' },
  scrollX: 0,
  scrollY: 0,

  currentPageTitle: '',

  platform: 'compliance',
  isFixedNav: true,
  applicationCssClass: Ember.computed.alias('platform'),

  platformName: Ember.computed('platform', function () {
    switch (this.get('platform')) {
      case 'compliance':
        return 'Compliance Manager';
      case 'audit':
        return 'Audit Manager';
    }
  }),

  defaultRoute: Ember.computed('platform', function () {
    switch (this.get('platform')) {
      case 'compliance':
        return 'compliance-dashboard';
      case 'audit':
        return 'audit-dashboard';
    }
  })

});
