const config = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: (config) => {
    config.resolve?.modules.push(`${process.cwd()}/src`)
    return config
  }
}
export default config
