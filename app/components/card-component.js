import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['card-component'],

  cardObject: null,
  cardTitle: Ember.computed.alias('cardObject.cardTitle'),
  cardValue: Ember.computed.alias('cardObject.cardValue'),
  cardContent: Ember.computed.alias('cardObject.cardContent'),
  linkText: Ember.computed.alias('cardObject.linkText'),
  linkPath: Ember.computed.alias('cardObject.linkPath'),
  linkObject: Ember.computed.alias('cardObject.linkObject'),
  cardIcon: Ember.computed.alias('cardObject.cardIcon'),
  cardColor: Ember.computed.alias('cardObject.cardColor'),

  cardIsAction: Ember.computed.notEmpty('cardIcon')

});
