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
        cardTitle: 'Failed Audits',
        cardValue: 0,
        cardContent: 'Audits failed in the last 30 days',
        linkText: 'View Failed Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Overdue Audits',
        cardValue: 0,
        cardContent: 'Audits that are currently overdue',
        linkText: 'View Overdue Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Upcoming Audits',
        cardValue: 0,
        cardContent: 'Audits that are due within the next 30 days',
        linkText: 'View Upcoming Audits',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Completed Audits',
        cardValue: 0,
        cardContent: 'Audits that have been completed in the past 60 days',
        linkText: 'View Completed Audits',
        cardIcon: null,
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'Start An Audits',
        cardValue: 0,
        cardContent: 'Start An Audit',
        linkText: 'Start An Audit',
        cardIcon: 'icon-add',
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'View Audit Report',
        cardValue: 0,
        cardContent: 'View your audit report',
        linkText: 'View Audit Report',
        cardIcon: 'icon-reports',
        cardColor: 'info'
      }),
    ]
  }

});
