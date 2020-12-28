import { ADD_ARTICLE_INIT, FETCH_ARTICLES_INIT } from '../store/constants';
import { fetchArticlesSuccess } from '../store/actions'
import { call, put, takeLatest } from 'redux-saga/effects';

export function* articleSaga(action) {
    yield takeLatest(ADD_ARTICLE_INIT, addAritlceSaga);
    yield takeLatest(FETCH_ARTICLES_INIT, fetchArticlesSaga);
}

function* addAritlceSaga(action) {
    console.log('SAGA FIRED: ', action.payload);
    let articles = [];
    const id = action.payload.id;
    const resData = yield localStorage.getItem('articles');
    if(resData)
        articles = JSON.parse(resData);
    if(id!=null)
        articles[id] = {title: action.payload.title, content: action.payload.content}
    else
        articles.push({title: action.payload.title, content: action.payload.content});
    yield localStorage.setItem('articles', JSON.stringify(articles));
    yield call(fetchArticlesSaga);
}

function* fetchArticlesSaga() {
    let articles = [];
    const resData = yield localStorage.getItem('articles');
    if(resData)
        articles = JSON.parse(resData);
    yield put(fetchArticlesSuccess(articles));
}

