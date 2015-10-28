QUnit.module('General behavior', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'block__element' }));
    this.subject = $('#qunit-fixture .block__element');
  }
});

QUnit.test('The chainable methods return Subject\'s instance', function(assert) {
  assert.deepEqual(this.subject.toggleModifier('modifier'), this.subject);
  assert.deepEqual(this.subject.addModifier('modifier'), this.subject);
  assert.deepEqual(this.subject.removeModifier('modifier'), this.subject);
});
