import algolia from 'algoliasearch'

const credentials = ['M6LW3WTXHH', 'a0503d27854a972aaece46964bbbd5d9']

const client = algolia(...credentials)

export const trainsIndex = client.initIndex('trains')
export const stationsIndex = client.initIndex('stations')

export default client
