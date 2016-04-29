require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Nathan Waters',
    description: 'Personal website of Nathan Waters',
    head: {
      titleTemplate: 'Nathan Waters',
      meta: [
        {name: 'description', content: 'Personal website of Nathan Waters'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Nathan Waters'},
        {property: 'og:image', content: '../static/logo/Logo-small.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Nathan Waters'},
        {property: 'og:description', content: 'Personal website of Nathan Waters'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@nathanwaters'},
        {property: 'og:creator', content: '@nathanwaters'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
