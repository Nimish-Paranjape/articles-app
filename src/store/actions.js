import { ADD_ARTICLE_INIT, FETCH_ARTICLES_INIT, FETCH_ARTICLES_SUCCESS, DELETE_ARTICLE } from './constants';

export const addArticleInit = article => {
    // console.log('ACTION FIRED: ', article);
    return {
        type: ADD_ARTICLE_INIT,
        payload: article
    };
}

export const fetchArticlesInit = page => {
    return {
        type: FETCH_ARTICLES_INIT,
        payload: page
    };
}

export const fetchArticlesSuccess = articles => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: articles
    };
}

export const deleteArticle = id => {
    return {
        type: DELETE_ARTICLE,
        payload: id
    };
}