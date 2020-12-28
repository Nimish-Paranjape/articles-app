import React from 'react';
import './NewArticle.css';

const newArticle = props => {
    return (
        <div className="container-div">
            <div className="component-div">
                <button onClick={() => props.click(false)}>X</button>
            </div>
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
                <button type="button" onClick={props.add}>Add+</button>
            </form>
        </div>
    );
}

export default newArticle;