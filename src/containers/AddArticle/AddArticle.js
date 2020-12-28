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

    useEffect(() => props.fetchArticlesInit(), []);

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

    const shareHandler = id => {
        toggleShareModal(true);
        updateArticle(props.articles[id]);
    }

    return (
        <div className="add-article">
            <h1>Welcome to new-article page.</h1>
            <button onClick={() => toggleAddModal(true)}>ADD</button>
            {showAddModal ? (
                <Modal click={toggleAddModal}>
                    <NewArticle
                        click={toggleAddModal}
                        article={newArticle}
                        add={addHandler}
                        change={changeHandler} />
                </Modal>
            ) : null}
            {showShareModal ? (
                <Modal click={toggleShareModal}>
                    <ShareArticle article={newArticle} />
                </Modal>
            ) : null }
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
                            shareArticle={shareHandler} />
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
        fetchArticlesInit: () => dispatch(fetchArticlesInit()),
        addArticleInit: article => dispatch(addArticleInit(article))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle);