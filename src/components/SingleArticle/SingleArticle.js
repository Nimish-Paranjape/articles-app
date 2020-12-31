import React from 'react';
import './SingleArticle.css';

const singleArticle = props => {
    return (
        <div className="article-card">
            <h1>{props.article.title}</h1>
            <p>{props.article.content.substring(0, 50)}...</p>
            <div className="options">
                <button onClick={() => props.click(props.id)}>{props.option}</button>
            </div>
        </div>
    );
}

export default singleArticle;