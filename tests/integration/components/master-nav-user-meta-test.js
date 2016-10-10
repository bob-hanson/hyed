import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('master-nav-user-meta', 'Integration | Component | master nav user meta', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{master-nav-user-meta}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#master-nav-user-meta}}
      template block text
    {{/master-nav-user-meta}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
