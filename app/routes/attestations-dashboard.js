import BaseRoute from './base-route';

export default BaseRoute.extend({

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
        cardTitle: 'Open Audits',
        cardValue: 0,
        cardContent: 'Attestations that are currently open',
        linkText: 'View Open Attestations',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Create New Attestation',
        cardValue: 0,
        cardContent: 'Create New Attestation',
        linkText: 'Create New Attestation',
        cardIcon: 'icon-add',
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'View Attestation Report',
        cardValue: 0,
        cardContent: 'View your attestation report',
        linkText: 'View Attestation Report',
        cardIcon: 'icon-reports',
        cardColor: 'info'
      }),
    ]
  }

});
