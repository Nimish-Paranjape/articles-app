import { ADD_ARTICLE_INIT, FETCH_ARTICLES_INIT, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILED } from './constants';

export const addArticleInit = article => {
    // console.log('ACTION FIRED: ', article);
    return {
        type: ADD_ARTICLE_INIT,
        payload: article
    };
}

export const fetchArticlesInit = () => {
    return {
        type: FETCH_ARTICLES_INIT
    };
}

export const fetchArticlesSuccess = articles => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles
    };
}

export const fetchArticlesFailed = error => {
    return {
        type: FETCH_ARTICLES_FAILED,
        payload: error
    };
}