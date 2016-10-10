import BaseRoute from './base-route';

export default BaseRoute.extend({
  beforeModel() {
    this.get('currentApp').set('isFixedNav', false);
    this.get('currentApp').set('isViewingSecondaryNav', true);
  }
});
