import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import NewArticle from '../../components/NewArticle/NewArticle';
import SingleArticle from '../../components/SingleArticle/SingleArticle';
import ShareArticle from '../ShareArticle/ShareArticle';
import { connect } from 'react-redux'
import { fetchArticlesInit, addArticleInit } from '../../store/actions'
import './AddArticle.css';

const AddArticle = props => {
    let [showAddModal, toggleAddModal] = useState(false);
    let [showShareModal, toggleShareModal] = useState(false);
    let [newArticle, updateArticle] = useState({ id: null, title: '', content: '' });

    useEffect(() => props.fetchArticlesInit(1), []);

    const addHandler = () => {
        toggleAddModal(false);
        props.addArticleInit(newArticle);
        updateArticle({ id: null, title: '', content: '' });
    }

    const changeHandler = source => {
        newArticle[source.target.name] = source.target.value;
        updateArticle(newArticle);
    }

    const editHandler = id => {
        newArticle = props.articles[id];
        newArticle.id = id;
        updateArticle(newArticle);
        toggleAddModal(true);
    }

    const addModalHandler = () => {
        toggleAddModal(false);
        updateArticle({ id: null, title: '', content: '' });
    }

    const shareModalHandler = id => {
        toggleShareModal(true);
        updateArticle({ ...props.articles[id], id: id });
    }

    const hideShareModal = () => {
        toggleShareModal(false);
        updateArticle({id: null, title: '', content: ''});
    }

    return (
        <div className="add-article">
            <h1>Welcome to new-article page.</h1>
            <button onClick={() => toggleAddModal(true)} className="add-btn">ADD</button>
            {showAddModal ? (
                <Modal click={addModalHandler}>
                    <NewArticle
                        click={addModalHandler}
                        article={newArticle}
                        add={addHandler}
                        change={changeHandler} />
                </Modal>
            ) : null}
            {showShareModal ? (
                <Modal click={hideShareModal}>
                    <ShareArticle article={newArticle} click={hideShareModal} />
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
                            option="edit"
                            share={true}
                            shareArticle={shareModalHandler} />
                    );
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticlesInit: page => dispatch(fetchArticlesInit(page)),
        addArticleInit: article => dispatch(addArticleInit(article))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);