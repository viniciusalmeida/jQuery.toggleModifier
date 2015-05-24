QUnit.module('Unit #__getClasses', {
  beforeEach: function() {
    $('#qunit-fixture').append($('<div>', { class: 'class-a' }));
    this.subjectElement = $('#qunit-fixture .class-a');
    this.subjectMethod = $.fn.toggleModifier.methods.__getClasses;
  }
});

QUnit.test('Getting the classes of element', function(assert) {
  assert.deepEqual(this.subjectMethod(this.subjectElement), ['class-a'],
    'When the element contains a single one class, the method returns a Array with a single position');

  this.subjectElement.addClass('class-b');
  assert.deepEqual(this.subjectMethod(this.subjectElement), ['class-a', 'class-b'],
    'When the element contains two or more classes, the method returns a Array with one class in each position');
});
