import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesInit, deleteArticle } from '../../store/actions';
import SingleArticle from '../../components/SingleArticle/SingleArticle';

const Articles = props => {

    useEffect(() => props.fetchArticlesInit(1), []);

    const deleteHandler = id => {
        props.deleteArticle(id);
    }

    return (
        <div>
            <h1>Welcome to articles page</h1>
            {props.articles.map((article, index) => {
                return (
                    <SingleArticle
                        article={article}
                        id={index}
                        key={index}
                        click={deleteHandler}
                        option="delete" />
                );
            })}
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
        deleteArticle: id => dispatch(deleteArticle(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);