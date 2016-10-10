import BaseRoute from './base-route';

export default BaseRoute.extend({

  beforeModel() {
    this.get('currentApp').set('isFixedNav', true);
    this.get('currentApp').set('isViewingSecondaryNav', false);
  },

  model() {
    return this.ajaxResponse();
  },

  setupController(controller, model) {
    controller.set('dashboardObjects', model);
  },

  ajaxResponse() {
    return [
      Ember.Object.create({
        cardTitle: 'Overdue Attestations',
        cardValue: 0,
        cardContent: 'Total attestations that are currently overdue',
        linkText: 'View Overdue Attestations',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Overdue Audits',
        cardValue: 0,
        cardContent: 'Total audits that are currently overdue',
        linkText: 'View Overdue Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Failed Audits',
        cardValue: 0,
        cardContent: 'Audits failed within the last 30 days',
        linkText: 'View Failed Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Unresolved Incidents',
        cardValue: 2,
        cardContent: 'Total number of unresolved incidents',
        linkText: 'View Unresolved Incidents',
        cardIcon: null,
        cardColor: 'error'
      }),
      Ember.Object.create({
        cardTitle: 'Report An Incident',
        cardValue: null,
        cardContent: 'Report An Incident',
        linkText: 'Report An Incident',
        cardIcon: 'icon-add',
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'Overdue Audits',
        cardValue: 0,
        cardContent: 'Total audits that are currently overdue',
        linkText: 'View Overdue Attestations',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Failed Audits',
        cardValue: 0,
        cardContent: 'Audits failed within the last 30 days',
        linkText: 'View Failed Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Unresolved Incidents',
        cardValue: 2,
        cardContent: 'Total number of unresolved incidents',
        linkText: 'View Unresolved Incidents',
        cardIcon: null,
        cardColor: 'error'
      }),
      Ember.Object.create({
        cardTitle: 'Report An Incident',
        cardValue: null,
        cardContent: 'Report An Incident',
        linkText: 'Report An Incident',
        cardIcon: 'icon-add',
        cardColor: 'info'
      })
    ]
  }

});
