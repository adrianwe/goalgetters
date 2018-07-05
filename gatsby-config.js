const keys = require('./keys/keys')

module.exports = {
  siteMetadata: {
    title: 'goalgetters!',
    siteUrl: 'https://goalgetters.space',
    description: '',
    keywords: ''
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: keys.spaceId,
        accessToken: keys.accessToken
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://space.us18.list-manage.com/subscribe/post?u=a7fc7d2ee180e911783c2c907&amp;id=071814cf2a'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sitemap'
    }
  ]
}