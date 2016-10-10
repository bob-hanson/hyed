import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  currentApp: Ember.inject.service(),
  setupScrollWatch() {
    let appContainer = $('#app');
    appContainer.bind('scroll', this.watchScroll.bind(this, appContainer));
  },

  watchScroll(appContainer) {
    window.requestAnimationFrame(this.setScrollPosition.bind(this, appContainer.scrollLeft(), appContainer.scrollTop()));
  },

  teardownScrollWatch() {
    let currentApp = this.get('currentApp');
    $('#app').unbind('scroll');
    currentApp.setProperties({'scrollX': 0, 'scrollY': 0});
  },

  setScrollPosition(scrollXPos, scrollYPos) {
    this.get('currentApp').set('scrollX', scrollXPos);
    this.get('currentApp').set('scrollY', scrollYPos);
  }


});
