QUnit.module('Modifier addition behavior', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'block__element' }));
    this.subject = $('#qunit-fixture .block__element');
  }
});

QUnit.test('Add a modifier with #toggleModifier', function(assert) {
  this.subject.toggleModifier('modifier');

  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The modifier class has been added');
  assert.ok(this.subject.hasClass('block__element'),
    'The old class remains equal');
});

QUnit.test('Adding correctly the modifier when the element already contains one.', function(assert) {
  this.subject.toggleModifier('modifier');
  this.subject.toggleModifier('another-modifier');

  assert.ok(this.subject.hasClass('block__element--another-modifier'),
    'The correct modifier has been added');
  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The old modifier class remains equal');
});

QUnit.test('Add a modifier only once (I\'ll try many)', function(assert) {
  this.subject.addClass('block__element');
  this.subject.addModifier('modifier');
  this.subject.addModifier('modifier');
  this.subject.addModifier('modifier');

  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The modifier was added only once');
});

QUnit.test('Add a modifier with #addModifier', function(assert) {
  this.subject.addClass('block__element');
  this.subject.addModifier('modifier');

  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The modifier was added');
});
