# jQuery.toggleModifier

[![Build Status](https://travis-ci.org/viniciusalmeida/jQuery.toggleModifier.svg)](https://travis-ci.org/viniciusalmeida/jQuery.toggleModifier)

jQuery steroids to work easily with BEM modifiers.

## Disclaimer

Sometimes the BEM modifiers manipulation with JavaScript is very boring. We should write verbose classes to change elements status and this is bad.

This problem can be solved with jQuery.toggleModifier. Look this case:

```html
<button class="block-name__element-name"></button>
```

To add a modifier (*without jQuery.toggleModifier*) we should evoke the `.toggleClass()` of jQuery. Something like this:

```javascript
.toggleClass('block-name__element-name--modifier-name');
```

_This is bad. If we add a new element in the hierarchy of the CSS component, this change should be reflected on our JavaScript :scream:_

But now, with jQuery.toggleModifier we can just evoke `.toggleModifier()`:

```javascript
.toggleModifier('modifier-name');
```

And have the same behavior.

### Backlog

- Allow manipulation of modifiers when the element represents two or more BEM elements.
