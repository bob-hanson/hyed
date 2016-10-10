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
        cardTitle: 'Overdue Assesments',
        cardValue: 0,
        cardContent: 'Assessments that are currently overdue',
        linkText: 'View Overdue Attestations',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'High Risk Rating',
        cardValue: 0,
        cardContent: 'Assessments with a risk rating between 15 and 25',
        linkText: 'View High Risk Rating Assesments',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Open Assesments',
        cardValue: 0,
        cardContent: 'All assessments that are in a status other than Complete',
        linkText: 'View Open Assesments',
        cardIcon: null,
        cardColor: 'success'
      }),
      Ember.Object.create({
        cardTitle: 'Open Mitigating Actions',
        cardValue: 0,
        cardContent: 'Mitigating Actions with a status other than Completed',
        linkText: 'View Open Mitigating Actions',
        cardIcon: null,
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'Add New Risk',
        cardValue: 0,
        cardContent: 'Add New Risk',
        linkText: 'Add New Risk',
        cardIcon: 'icon-add',
        cardColor: 'info'
      }),
      Ember.Object.create({
        cardTitle: 'View Risk Report',
        cardValue: 0,
        cardContent: 'View your risk report',
        linkText: 'View Risk Report',
        cardIcon: 'icon-reports',
        cardColor: 'info'
      }),
    ]
  }
});
