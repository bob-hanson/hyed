import Ember from 'ember';
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
        cardTitle: 'Pending Assignment',
        cardValue: 1,
        cardContent: 'Assignments with a status of Ready for Assignment',
        linkText: 'View Pending Assignment',
        cardIcon: null,
        cardColor: 'error'
      }),
      Ember.Object.create({
        cardTitle: 'Overdue Incidents',
        cardValue: 0,
        cardContent: 'Incidents that are currently overdue',
        linkText: 'View Overdue Incidents',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Investigation',
        cardValue: 0,
        cardContent: 'Incidents with a status of ‘Investigation’',
        linkText: 'View Investigations',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Final Approval',
        cardValue: 0,
        cardContent: 'All incidents with a status of ‘Final Approval’',
        linkText: 'View Final Approvals',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Pending Corrective Actions',
        cardValue: 0,
        cardContent: 'Corrective actions associated with incidents that are not in a status of ‘Complete’',
        linkText: 'View Corrective Actions',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Pending Follow Ups',
        cardValue: 0,
        cardContent: 'Follow ups associated with incidents that are not in a status of ‘Complete’',
        linkText: 'View Pending Follow Ups',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Report An Incident',
        cardValue: 0,
        cardContent: 'Report An Incident',
        linkText: 'Report An Incident',
        cardIcon: 'icon-add',
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'View Incident Report',
        cardValue: 0,
        cardContent: 'View your incident report',
        linkText: 'View Incident Report',
        cardIcon: 'icon-reports',
        cardColor: 'info'
      }),
    ];
  }
});
