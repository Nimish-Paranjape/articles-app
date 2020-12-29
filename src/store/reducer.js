import { FETCH_ARTICLES_SUCCESS } from './constants';

let initialState = {
    articles: [],
    totalItems: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return {
                articles: action.payload.articles,
                totalItems: action.payload.totalItems
            };
        default:
            return state;
    }
}

export default reducer;