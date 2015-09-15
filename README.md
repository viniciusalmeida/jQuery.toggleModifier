# jQuery.toggleModifier

[![Build Status](https://travis-ci.org/viniciusalmeida/jQuery.toggleModifier.svg)](https://travis-ci.org/viniciusalmeida/jQuery.toggleModifier)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

jQuery steroids to work easily with [BEM](https://en.bem.info/method/) modifiers.

## Install via [Bower](http://bower.io)

```bash
$ bower install jQuery.toggleModifier
```

## Install via [Asset-rails](https://rails-assets.org/)

```ruby
source 'https://rails-assets.org' do
  gem 'rails-assets-jQuery.toggleModifier'
end
```

---

Sometimes the BEM modifiers (when used to represents statuses) manipulation with JavaScript is very boring. We should write verbose classes to change elements status and this is bad.

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

You can also just add or remove a modifier like that:

```javascript
.addModifier('modifier-name');
// or
.removeModifier('modifier-name');
// or
.hasModifier('modifier-name');
```

### Backlog

- Allow manipulation of modifiers when the element represents two or more BEM elements.
