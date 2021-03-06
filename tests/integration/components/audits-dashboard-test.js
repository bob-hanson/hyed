import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audits-dashboard', 'Integration | Component | audits dashboard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audits-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audits-dashboard}}
      template block text
    {{/audits-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
