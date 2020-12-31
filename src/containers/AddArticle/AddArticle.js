import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import SingleArticle from '../../components/SingleArticle/SingleArticle';
import ShareArticle from '../ShareArticle/ShareArticle';
import Pagination from '../../components/Pagination/Pagination';
import { connect } from 'react-redux'
import { fetchArticlesInit, addArticleInit } from '../../store/actions'
import './AddArticle.css';

const AddArticle = props => {
    let [showAddModal, toggleAddModal] = useState(false);
    let [newArticle, updateArticle] = useState({ id: null, title: '', content: ''});

    useEffect(() => {
        // const search = props.location.search;
        // const params = new URLSearchParams(search);
        // let page = params.get('page');
        // if(!page)
        //     page = 1;
        // console.log(page);
        props.fetchArticlesInit(getPage());
    }, [props.location]);

    const addHandler = form => {
        toggleAddModal(false);
        props.addArticleInit({article: newArticle, form: form});
        props.fetchArticlesInit(getPage());
        updateArticle({ id: null, title: '', content: ''});
    }

    const checkArticleValidity = () => {
        return newArticle.title.length>0 && newArticle.content.length>0;
    }

    const changeHandler = source => {
        newArticle[source.target.name] = source.target.value;
        updateArticle(newArticle);
    }

    const editHandler = id => {
        newArticle = props.articles[id];
        newArticle.id = id;
        console.log(newArticle);
        updateArticle(newArticle);
        toggleAddModal(true);
    }

    const addModalHandler = () => {
        toggleAddModal(false);
        updateArticle({ id: null, title: '', content: '' });
    }

    const getPage = () => {
        const search = props.location.search;
        const params = new URLSearchParams(search);
        let page = params.get('page');
        console.log(page);
        if(page){
            page = parseInt(page);
            return page;
        }
        return  1;
    }

    const navigateToPage = source => {
        const url = props.history.location.pathname + '?page=' + source.target.value;
        props.history.push(url);
    }

    return (
        <div className="add-article">
            <h1>Welcome to new-article page.</h1>
            <button onClick={() => toggleAddModal(true)} className="add-btn">ADD</button>
            {showAddModal ? (
                <Modal click={addModalHandler}>
                    <ShareArticle 
                        article={newArticle} 
                        share={addHandler}
                        change={changeHandler}
                        checkArticle={checkArticleValidity}
                        close={addModalHandler} />
                </Modal>
            ) : null}
            <div className="article-list">
                {props.articles.map((article, index) => {
                    return (
                        <SingleArticle
                            article={article}
                            id={index}
                            key={index}
                            click={editHandler}
                            option="edit" />
                    );
                })}
            </div>
            {props.articles.length>0 ? (
                <div className="pagination">
                    <Pagination page={getPage()} totalItems={props.totalItems} navigate={navigateToPage} />
                </div>
            ) : null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        totalItems: state.totalItems
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticlesInit: page => dispatch(fetchArticlesInit(page)),
        addArticleInit: article => dispatch(addArticleInit(article))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);