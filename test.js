const { strict: assert } = require('node:assert')
const postcss = require('postcss')

test('default')
test('custom name', { name: 'custom-name' })
test('custom layer name',{ layer: 'custom-layer' })

function test (description, options = {}) {
  const layer = options.layer || 'tw-initial'
  const name = options.name || 'initial'

  const content = `${name}:bg-black`
  const actual = process(content, options)
  const expected = `@layer ${layer} {
    .${name}\\:bg-black_ {
        --tw-bg-opacity: 1;
        background-color: rgb(0 0 0 / var(--tw-bg-opacity))
    }
}`
  assert.equal(actual, expected, message(description))
}

function process (content, options = {}) {
  return postcss([
    require('tailwindcss')({
      content: [{ raw: content }],
      plugins: [require('./')(options)]
    })
  ]).process('@tailwind utilities').css
}

function message (description) {
  return `test: ${description}. Expected values to be strictly equal:`
}
