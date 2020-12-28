import React from 'react';
import './ShareArticle.css';

const shareArticle = props => {
    return (
        <div className="outer-div">
            <div className="article-thumbnail">
                <h2>{props.article.title}</h2>
                <p>{props.article.content}</p>
            </div>
            <div className="share-options">
                <div className="social-media-inputs">
                    <textarea className="twitter"></textarea>
                    <textarea className="facebook"></textarea>
                    <textarea className="linkedIn"></textarea>
                    <textarea className="email"></textarea>
                </div>
                <h2>Share on:</h2>
                <div className="connections">
                    <h2>My Connections</h2>
                    <div className="checkboxes">
                        <input type="checkbox" name="twitter" value="twitter"></input>
                        <label htmlFor="twitter">Twitter</label>
                        <input type="checkbox" name="linkedIn" value="linkedIn"></input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input type="checkbox" name="facebook" value="facebook"></input>
                        <label htmlFor="facebook">Facebook</label>
                        <input type="checkbox" name="email" value="email"></input>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="connections">
                    <h2>Advisor Connections</h2>
                    <div className="checkboxes">
                        <input type="checkbox" name="twitter" value="twitter"></input>
                        <label htmlFor="twitter">Twitter</label>
                        <input type="checkbox" name="linkedIn" value="linkedIn"></input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input type="checkbox" name="facebook" value="facebook"></input>
                        <label htmlFor="facebook">Facebook</label>
                        <input type="checkbox" name="email" value="email"></input>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <button type="button">Share</button>
            </div>
        </div>
    );
}

export default shareArticle;