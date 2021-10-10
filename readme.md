# x-flexbox ![GitHub Actions Status](https://github.com/1000ch/x-flexbox/workflows/test/badge.svg)

> Web Components which provide Flexbox features.

## Install

Using [npm](https://www.npmjs.org/package/x-flexbox):

```sh
$ npm install x-flexbox
```

## Usage

Import `FlexContainer` and `FlexItem`, register them.

```html
<script type="module">
import { FlexContainer, FlexItem } from 'https://unpkg.com/x-flexbox';

customElements.define('flex-container', FlexContainer);
customElements.define('flex-item', FlexItem);
</script>
```

Put `<flex-container>` and `<flex-item>`.

```html
<flex-container flex-direction="column" flex-wrap="wrap">
  <flex-item flex-grow="2"></flex-item>
  <flex-item align-self="stretch"></flex-item>
</flex-container>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
