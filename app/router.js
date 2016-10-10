import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('messages', { resetNamespace: true });
  this.route('profile', { resetNamespace: true });

  this.route('tasks', { resetNamespace: true }, function () {
    this.route('pending-tasks', { resetNamespace: true });
  });

  this.route('clients', { resetNamespace: true }, function () {
    this.route('client', { resetNamespace: true, path: ':clientId' }, function () {

      this.route('locations', { resetNamespace: true }, function () {
        this.route('location', { resetNamespace: true, path: ':locationId' });
      });

      this.route('compliance-dashboard', { resetNamespace: true });
      this.route('attestations', { resetNamespace: true }, function () {
        this.route('attestations-dashboard', { resetNamespace: true });
        this.route('all-attestations', { resetNamespace: true});
        this.route('open-attestations', { resetNamespace: true});
        this.route('completed-attestations', { resetNamespace: true});
        this.route('overdue-attestations', { resetNamespace: true});
      });

      this.route('audits', { resetNamespace: true }, function () {
        this.route('audits-dashboard', { resetNamespace: true });
        this.route('all-audits', { resetNamespace: true});
        this.route('organizational-audits', { resetNamespace: true});
        this.route('failed-audits', { resetNamespace: true});
        this.route('overdue-audits', { resetNamespace: true});
        this.route('upcoming-audits', { resetNamespace: true});
        this.route('completed-audits', { resetNamespace: true});
        this.route('annual-audits', { resetNamespace: true});
        this.route('checklists', { resetNamespace: true});
      });

      this.route('incidents', { resetNamespace: true }, function () {
        this.route('incidents-dashboard', { resetNamespace: true });
        this.route('all-incidents', { resetNamespace: true});
        this.route('overdue-incidents', { resetNamespace: true});
        this.route('pending-assignments', { resetNamespace: true});
        this.route('investigations', { resetNamespace: true});
        this.route('final-approvals', { resetNamespace: true});
        this.route('closed-no-investigations', { resetNamespace: true});
        this.route('corrective-actions', { resetNamespace: true});
        this.route('corrective-action-details', { resetNamespace: true});
      });

      this.route('risks', { resetNamespace: true }, function () {
        this.route('risks-dashboard', { resetNamespace: true });
        this.route('all-risks', { resetNamespace: true});
        this.route('overdue-assesments', { resetNamespace: true});
        this.route('open-assesments', { resetNamespace: true});
        this.route('followup-actions', { resetNamespace: true});
        this.route('mitigation-actions', { resetNamespace: true});
      });
      this.route('compliance-toolbox', { resetNamespace: true });
      this.route('compliance-courses', { resetNamespace: true });
      this.route('compliance-documents', { resetNamespace: true });
      this.route('compliance-reports', { resetNamespace: true });
    });
  });
});

export default Router;
