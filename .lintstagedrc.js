module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `next lint --fix ${filenames.join(' ')}`,
    `npm test -- --findRelatedTests ${filenames.join(' ')}`
  ],
  ignores: ['./storybook/**', './jest/**', './generators/**']
}
