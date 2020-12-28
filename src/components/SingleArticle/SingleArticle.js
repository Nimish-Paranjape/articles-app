import React from 'react';
import './SingleArticle.css';

const singleArticle = props => {
    return (
        <div className="article-card">
            <div className="options">
                <button onClick={() => props.click(props.id)}>{props.option}</button>
                {props.share ? <button onClick={() => props.shareArticle(props.id)}>Share</button> : null}
            </div>
            <h1>{props.article.title}</h1>
            <p>{props.article.content}</p>
        </div>
    );
}

export default singleArticle;