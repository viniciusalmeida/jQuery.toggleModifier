(function(factory) {

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  'use strict';

  function modify(selectorReturn, action, modifier) {
    if (selectorReturn.length > 0) {
      selectorReturn.each(function(index, el) {
        action($(el), modifier);
      });
    } else {
      $.error('I can\'t find this selector. Can you check? (jQuery.toggleModifier) ;)');
    }
  }

  var methods = {
    __toggle: function(el, modifier) {
      if (methods.__hasModifier(el, modifier)) {
        var classToRemove = methods.__classToRemove(el, modifier);
        el.removeClass(classToRemove);
      } else {
        var currentClass = methods.__currentElementClass(el);
        el.addClass(currentClass + '--' + modifier);
      }
    },

    __add: function(el, modifier) {
      if (!methods.__hasModifier(el, modifier)) {
        var currentClass = methods.__currentElementClass(el);
        el.addClass(currentClass + '--' + modifier);
      }
    },

    __remove: function(el, modifier) {
      if (methods.__hasModifier(el, modifier)) {
        var classToRemove = methods.__classToRemove(el, modifier);
        el.removeClass(classToRemove);
      }
    },

    __classToRemove: function(el, modifier) {
      return methods.__getClasses(el).filter(function(currentClass) {
        return (currentClass.indexOf('--' + modifier) > -1) ? true : false;
      }).join(' ')
    },

    __currentElementClass: function(el) {
      return methods.__getClasses(el).filter(function(currentClass) {
        return (currentClass.indexOf('--') == -1) ? true : false;
      })[0];
    },

    __hasModifier: function(el, modifier) {
      var classes = methods.__getClasses(el),
          iterator;

      for (iterator = 0; iterator < classes.length; iterator++) {
        if (methods.__stringContainsModifier(classes[iterator], modifier)) {
          return true;
        };
      };
      return false;
    },

    __getClasses: function(el) {
      return el.attr('class').split(' ');
    },

    __stringContainsModifier: function(string, modifier) {
      var modifierIndexOf = string.indexOf('--');

      if (modifierIndexOf > -1) {
        return (string.slice(modifierIndexOf + 2, string.length) == modifier) ? true : false;
      }

      return false;
    }
  };

  $.fn.toggleModifier = function(modifier) {
    modify($(this), methods.__toggle, modifier);
  };

  $.fn.addModifier = function(modifier) {
    modify($(this), methods.__add, modifier);
  };

  $.fn.removeModifier = function(modifier) {
    modify($(this), methods.__remove, modifier);
  };

  $.fn.hasModifier = function(modifier) {
    return methods.__hasModifier($(this), modifier);
  };
}));
