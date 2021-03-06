import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('master-nav-user-links', 'Integration | Component | master nav user links', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{master-nav-user-links}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#master-nav-user-links}}
      template block text
    {{/master-nav-user-links}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
