const contentful = require('contentful')

module.exports = {
    createClient() {
        return contentful.createClient({
            space: 'nag93ywl7cjd',
            //accessToken: process.env.CTFL_ACCESS_TOKEN
            accessToken: 'AGNXviI2LfOo4C9MkD5l8hLphNQCusNnTL_uGRv0mJg'
        })
    }
}