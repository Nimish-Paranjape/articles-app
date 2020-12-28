import { FETCH_ARTICLES_SUCCESS } from './constants';

let initialState = {
    articles: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return {
                articles: action.payload
            };
        default:
            return state;
    }
}

export default reducer;