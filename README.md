# tailwind-initial

Generates utilities at a low specificity using CSS layers, letting developers set default styles for a component that can be overridden by adding plain Tailwind utility classes.

## Usage

```
npm install tailwind-initial
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-initial'),
    // ...
  ],
}
```

```html
<h1 class="initial:text-white">Hello, world!</h1><!-- white text -->
<h1 class="initial:text-white text-black">Hello, world!</h1><!-- black text -->
```

### Options

By default, the variant name is `initial`, and the generated layer name is `tw-initial`. These names can be customized like so:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwind-initial')({ name: 'init', layer: 'init-layer' }),
    // ...
  ],
}
```

## Should you use it?

Maybe, maybe not! This is an experimental approach, and it might be preferable to [configure your utility classes within your components](https://twitter.com/adamwathan/status/1496663841849151493). However, this might come in handy during the initial stages of component design, when the customization requirements are not yet known.
