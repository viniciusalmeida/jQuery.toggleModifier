QUnit.module('Modifier removal behavior', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'block__element' }));
    this.subject = $('#qunit-fixture .block__element');
  }
});

QUnit.test('Remove a modifier with #toggleModifier', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.toggleModifier('modifier');

  assert.notOk(this.subject.hasClass('block__element--modifier'),
    'The modifier class has been removed');
});

QUnit.test('Remove a modifier with #removeModifier', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.removeModifier('modifier');

  assert.ok(this.subject.hasClass('block__element'),
    'The modifier was removed');
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

QUnit.test('Remove a modifier only once (I\'ll try many)', function(assert) {
  this.subject.addClass('block__element--modifier');
  this.subject.removeModifier('modifier');
  this.subject.removeModifier('modifier');
  this.subject.removeModifier('modifier');

  assert.ok(this.subject.hasClass('block__element'),
    'The modifier was removed only once');
});
