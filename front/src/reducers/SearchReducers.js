const initialState = {
    hits: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULTS':
            return {
                ...state,
                hits: action.hits,
            }
            break
    }

    return state
}
