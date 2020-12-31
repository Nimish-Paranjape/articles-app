import { ADD_ARTICLE_INIT, FETCH_ARTICLES_INIT, DELETE_ARTICLE } from '../store/constants';
import { fetchArticlesSuccess } from '../store/actions'
import { call, put, takeLatest } from 'redux-saga/effects';

export function* articleSaga(action) {
    yield takeLatest(ADD_ARTICLE_INIT, addArticleSaga);
    yield takeLatest(FETCH_ARTICLES_INIT, fetchArticlesSaga);
    yield takeLatest(DELETE_ARTICLE, deleteArticleSaga)
}

function* addArticleSaga(action) {
    console.log('SAGA FIRED: ', action.payload);
    let articles = [];
    const id = action.payload.article.id;
    const resData = yield localStorage.getItem('articles');
    if(resData)
        articles = JSON.parse(resData);
    if(id!=null)
        articles[id] = {title: action.payload.article.title, content: action.payload.article.content, form: action.payload.form};
    else
        articles.push({title: action.payload.article.title, content: action.payload.article.content, form: action.payload.form});
    yield localStorage.setItem('articles', JSON.stringify(articles));
}

function* fetchArticlesSaga(action) {
    let articles = [];
    const page = action.payload ? action.payload : 1;
    const itemsToSkip = (page-1)*2;
    let totalItems = 0;
    const resData = yield localStorage.getItem('articles');
    if(resData)
        articles = JSON.parse(resData);
    totalItems = articles.length;
    articles = articles.slice(itemsToSkip, itemsToSkip+2);
    yield put(fetchArticlesSuccess({articles: articles, totalItems: totalItems}));
}

function* deleteArticleSaga(action) {
    // console.log(action.payload);
    let articles = [];
    const resData = yield localStorage.getItem('articles');
    if(resData)
        articles = JSON.parse(resData);
    articles.splice(action.payload, 1);
    yield localStorage.setItem('articles', JSON.stringify(articles));
}

