const keys = require('./keys/keys')

module.exports = {
  siteMetadata: {
    title: 'goalgetters!',
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
    'gatsby-plugin-netlify'
  ]
}
