import { ADD_ARTICLE_INIT, FETCH_ARTICLES_INIT, FETCH_ARTICLES_SUCCESS, DELETE_ARTICLE } from './constants';

export const addArticleInit = obj => {
    // console.log('ACTION FIRED: ', article);
    return {
        type: ADD_ARTICLE_INIT,
        payload: obj
    };
}

export const fetchArticlesInit = page => {
    return {
        type: FETCH_ARTICLES_INIT,
        payload: page
    };
}

export const fetchArticlesSuccess = obj => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: obj
    };
}

export const deleteArticle = id => {
    return {
        type: DELETE_ARTICLE,
        payload: id
    };
}