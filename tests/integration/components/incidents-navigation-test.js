import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('incidents-navigation', 'Integration | Component | incidents navigation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{incidents-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#incidents-navigation}}
      template block text
    {{/incidents-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
