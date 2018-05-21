import { trainsIndex } from '../algolia'

export const GET_SEARCH_RESULTS = () => async dispatch => {
    const { hits } = await trainsIndex.search('', {
        hitsPerPage: '10',
        page: '0',
        analytics: 'false',
        attributesToRetrieve: '*',
        facets: '[]',
    })

    await dispatch({
        type: 'GET_SEARCH_RESULTS',
        hits,
    })
}
