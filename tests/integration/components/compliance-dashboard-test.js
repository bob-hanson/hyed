import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('compliance-dashboard', 'Integration | Component | compliance dashboard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{compliance-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#compliance-dashboard}}
      template block text
    {{/compliance-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
