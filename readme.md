# `<x-flexbox>`

> Web Components which provide Flexbox features.

[![Build Status](https://travis-ci.org/1000ch/x-flexbox.svg?branch=master)](https://travis-ci.org/1000ch/x-flexbox)
[![NPM version](https://badge.fury.io/js/x-flexbox.svg)](http://badge.fury.io/js/x-flexbox)
[![devDependency Status](https://david-dm.org/1000ch/x-flexbox/dev-status.svg)](https://david-dm.org/1000ch/x-flexbox?type=dev)

## Install

Using [npm](https://www.npmjs.org/package/x-flexbox):

```sh
$ npm install x-flexbox
```

## Usage

Import `FlexContainer` and `FlexItem`, register them.

```html
<script type="module">
import FlexContainer from 'https://unpkg.com/x-flexbox/dist/flex-container.js';
import FlexItem from 'https://unpkg.com/x-flexbox/dist/flex-item.js';

customElements.define('flex-container', FlexContainer);
customElements.define('flex-item', FlexItem);
</script>
```

Put `<flex-container>` and `<flex-item>`.

```html
<flex-container flex-direction="column" flex-wrap="wrap">
  <flex-item flex-grow="2"></x-cell>
  <flex-item align-self="stretch"></x-cell>
</flex-container>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
