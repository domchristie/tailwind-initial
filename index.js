const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options = {}) {
  return function ({ addVariant }) {
    addVariant(
      options.name || 'initial',
      `@layer ${options.layer || 'tw-initial'}`
    )
  }
})
