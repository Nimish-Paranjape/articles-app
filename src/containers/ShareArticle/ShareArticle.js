import React, { useState } from 'react';
import './ShareArticle.css';

const ShareArticle = props => {

    const [form, updateForm] = useState({
        inputs: {
            twitter: '',
            facebook: '',
            linkedIn: '',
            email: ''
        },
        myConnections: {
            twitter: false,
            facebook: false,
            linkedIn: false,
            email: false
        },
        advisorConnections: {
            twitter: false,
            facebook: false,
            linkedIn: false,
            email: false
        },
        valid: false,
        error: null
    });

    const checkFormValidity = currentForm => {
        let isValid = false;
        isValid = Object.keys(currentForm.myConnections).every(connection => {
            if(currentForm.myConnections[connection]) {
                if(currentForm.inputs[connection]==='')
                    currentForm.error = 'Please fill the ' + connection + ' field.';
                return currentForm.inputs[connection]!=='';
            }
            return true;
        });
        if(isValid) {
            isValid = Object.keys(currentForm.advisorConnections).every(connection => {
                if(currentForm.advisorConnections[connection]) {
                    let returnValue = Object.keys(currentForm.inputs).every(input => {
                        if(currentForm.inputs[input]==='')
                            currentForm.error = 'Please fill all the input fields before submitting.';
                        return currentForm.inputs[input]!=='';
                    })
                    return returnValue;
                }
                return true;
            });
        }
        if(isValid)
            currentForm.error = null;
        return isValid;
    }

    const inputChangeHandler = source => {
        let updatedForm = {...form};
        updatedForm.inputs[source.target.name] = source.target.value;
        updatedForm.valid = checkFormValidity(updatedForm);
        console.log(updatedForm);
        updateForm(updatedForm);
    }

    const myConnectionsHandler = source => {
        let updatedForm = {...form};
        updatedForm.myConnections[source.target.name] = !updatedForm.myConnections[source.target.name];
        updatedForm.valid = checkFormValidity(updatedForm);
        console.log(updatedForm);
        updateForm(updatedForm);
    }

    const advConnectionsHandler = source => {
        let updatedForm = {...form};
        updatedForm.advisorConnections[source.target.name] = !updatedForm.advisorConnections[source.target.name];
        updatedForm.valid = checkFormValidity(updatedForm);
        console.log(updatedForm);
        updateForm(updatedForm);
    }

    const shareHandler = () => {
        console.log(form);
        props.click();
    }

    return (
        <div className="outer-div">
            <div className="article-thumbnail">
                <h2>{props.article.title}</h2>
                <p>{props.article.content.substring(0, 250)}</p>
            </div>
            <div className="share-options">
                <div className="social-media-inputs">
                    <div>
                        <textarea
                            className="twitter"
                            maxLength={100}
                            name="twitter"
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="facebook"
                            maxLength={150}
                            name="facebook"
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="linkedIn"
                            maxLength={150}
                            name="linkedIn"
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="email"
                            name="email"
                            onChange={e => inputChangeHandler(e)}></textarea>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                </div>
                <h2>Share on:</h2>
                <div className="connections">
                    <h2>My Connections</h2>
                    <div className="checkboxes">
                        <input
                            type="checkbox"
                            name="twitter"
                            value="twitter"
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="twitter">Twitter</label>
                        <input
                            type="checkbox"
                            name="linkedIn"
                            value="linkedIn"
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input 
                            type="checkbox" 
                            name="facebook" 
                            value="facebook" 
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="facebook">Facebook</label>
                        <input 
                            type="checkbox" 
                            name="email" 
                            value="email" 
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="connections">
                    <h2>Advisor Connections</h2>
                    <div className="checkboxes">
                        <input 
                            type="checkbox" 
                            name="twitter" 
                            value="twitter" 
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="twitter">Twitter</label>
                        <input 
                            type="checkbox" 
                            name="linkedIn" 
                            value="linkedIn" 
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input 
                            type="checkbox" 
                            name="facebook" 
                            value="facebook" 
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="facebook">Facebook</label>
                        <input 
                            type="checkbox" 
                            name="email" 
                            value="email" 
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                {form.error ? (
                    <div className="error-div">
                        <p>{form.error}</p>
                    </div>
                ) : null}
                <button type="button" disabled={!form.valid} onClick={shareHandler}>Share</button>
            </div>
            <button type="button" onClick={() => props.click(false)}>X</button>
        </div>
    );
}

export default ShareArticle;