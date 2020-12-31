import React from 'react';
import './NewArticle.css';

const newArticle = props => {
    return (
        <form className="article-form">
            <label>Title:</label>
            <input 
                className="input-field" 
                type="text" 
                name="title"
                defaultValue={props.article.title} 
                onChange={e => props.change(e)}></input>
            <label>Article Body:</label>
            <textarea 
                className="input-field" 
                name="content" 
                defaultValue={props.article.content}
                onChange={e => props.change(e)}
                rows="10">
            </textarea>
        </form>
    );
}

export default newArticle;