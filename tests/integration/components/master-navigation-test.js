import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('master-navigation', 'Integration | Component | master navigation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{master-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#master-navigation}}
      template block text
    {{/master-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
