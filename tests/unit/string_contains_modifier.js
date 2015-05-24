QUnit.module('Unit #__stringContainsModifier', {
  beforeEach: function() {
    this.subjectMethod = $.fn.toggleModifier.methods.__stringContainsModifier;
  }
});

QUnit.test('Searching a modifier in some class name', function(assert) {
  assert.ok(this.subjectMethod('foo--bar', 'bar'),
    'When the string contains the modifier the method returns true');

  assert.notOk(this.subjectMethod('foo__bar', 'bar'),
    'When the string contains the modifier string but in a not modifier format the method returns false');
  assert.notOk(this.subjectMethod('foo--bar', 'baz'),
    'When the string contains a modifier not informed on signature the method returns false');
});
