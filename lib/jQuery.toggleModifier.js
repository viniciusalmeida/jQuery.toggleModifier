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

  $.fn.toggleModifier = function(modifier) {
    var selectorReturn = $(this),
        self = this;

    if (selectorReturn.length > 0) {
      $.extend(this, this.toggleModifier.methods);
      selectorReturn.each(function(index, el) {
        self.__init($(el), modifier);
      });
    } else {
      $.error('I can\'t find this selector. Can you check? (jQuery.toggleModifier) ;)');
    }
  };

  $.fn.toggleModifier.methods = {
    __init: function(el, modifier) {
      if (this.__elementHasModifier(el, modifier)) {
        var classToRemove = this.__classToRemove(el, modifier);
        el.removeClass(classToRemove);
      } else {
        var currentClass = this.__currentElementClass(el);
        el.addClass(currentClass + '--' + modifier);
      }
    },

    __classToRemove: function(el, modifier) {
      return this.__getClasses(el).filter(function(currentClass) {
        return (currentClass.indexOf('--' + modifier) > -1) ? true : false;
      }).join(' ');
    },

    __currentElementClass: function(el) {
      return this.__getClasses(el).filter(function(currentClass) {
        return (currentClass.indexOf('--') === -1) ? true : false;
      })[0];
    },

    __elementHasModifier: function(el, modifier) {
      var classes = this.__getClasses(el),
          iterator;

      for (iterator = 0; iterator < classes.length; iterator++) {
        if (this.__stringContainsModifier(classes[iterator], modifier)) {
          return true;
        }
      }
      return false;
    },

    __getClasses: function(el) {
      return el.attr('class').split(' ');
    },

    __stringContainsModifier: function(string, modifier) {
      var modifierIndexOf = string.indexOf('--');

      if (modifierIndexOf > -1) {
        return (string.slice(modifierIndexOf + 2, string.length) === modifier) ? true : false;
      }

      return false;
    }
  };
}));
