QUnit.module('General behavior', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'block__element' }));
    this.subject = $('#qunit-fixture .block__element');
  }
});

QUnit.test('Element has modifier', function(assert) {
  this.subject.addClass('block__element--modifier');

  assert.ok(this.subject.hasModifier('modifier'),
    'The element has modifier');
});


QUnit.test('Element has not modifier', function(assert) {
  this.subject.addClass('block__element');

  assert.notOk(this.subject.hasModifier('modifier'),
    'The element has not modifier');
});
