QUnit.module('General behavior', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'block__element' }));
    this.subject = $('#qunit-fixture .block__element');
  }
});

QUnit.test('Add the modifier', function(assert) {
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

QUnit.test('Remove the modifier', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.toggleModifier('modifier');

  assert.notOk(this.subject.hasClass('block__element--modifier'),
    'The modifier class has been removed');
});

QUnit.test('Remove the correct modifier when the element contains two or more', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.addClass('block__element--another-modifier');
  this.subject.toggleModifier('modifier');

  assert.notOk(this.subject.hasClass('block__element--modifier'),
    'The modifier class has been removed');
  assert.ok(this.subject.hasClass('block__element--another-modifier'),
    'The modifier not toggled remains equal');
});

QUnit.test('Add a modifier', function(assert) {
  this.subject.addClass('block__element');
  this.subject.addModifier('modifier');

  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The modifier was added');
});

QUnit.test('Add a modifier only once (I\'ll try many)', function(assert) {
  this.subject.addClass('block__element');
  this.subject.addModifier('modifier');
  this.subject.addModifier('modifier');
  this.subject.addModifier('modifier');

  assert.ok(this.subject.hasClass('block__element--modifier'),
    'The modifier was added only once');
});

QUnit.test('Remove a modifier', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.removeModifier('modifier');

  assert.ok(this.subject.hasClass('block__element'),
    'The modifier was removed');
});

QUnit.test('Remove a modifier only once (I\'ll try many)', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.removeModifier('modifier');
  this.subject.removeModifier('modifier');
  this.subject.removeModifier('modifier');

  assert.ok(this.subject.hasClass('block__element'),
    'The modifier was removed only once');
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
