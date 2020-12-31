import React, { useState } from 'react';
import NewArticle from '../../components/NewArticle/NewArticle';
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
        isValid = props.checkArticle();
        console.log('Article valid = ', isValid);
        if(!isValid){
            currentForm.error = 'Please complete Article form..';
            return isValid;
        }
        isValid = Object.keys(currentForm.inputs).every(input => {
            if(currentForm.inputs[input]!=='') {
                if(!currentForm.myConnections[input])
                    currentForm.error = 'Please select ' + input + 'checkbox..';
                return currentForm.myConnections[input];
            }
            return true;
        });
        if(!isValid) 
            currentForm.error = 'Please fill altleast one share input..';
        if(isValid) {
            isValid = Object.keys(currentForm.myConnections).every(connection => {
                if(currentForm.myConnections[connection]) {
                    if(currentForm.inputs[connection]==='')
                        currentForm.error = 'Please fill the ' + connection + ' field.';
                    return currentForm.inputs[connection]!=='';
                }
                return true;
            });
        }
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
        const updatedForm = {
            inputs: form.inputs,
            myConnections: form.myConnections,
            advisorConnections: form.advisorConnections
        };
        props.share(updatedForm);
    }

    return (
        <div className="outer-div">
            <div className="article-thumbnail">
                <NewArticle
                    article={props.article}
                    change={props.change} />
            </div>
            <div className="share-options">
                <div className="social-media-inputs">
                    <div>
                        <textarea
                            className="twitter"
                            maxLength={100}
                            name="twitter"
                            defaultValue={props.article.form ? props.article.form.inputs.twitter : ''}
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="facebook"
                            maxLength={150}
                            name="facebook"
                            defaultValue={props.article.form ? props.article.form.inputs.facebook : ''}
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="linkedIn"
                            maxLength={150}
                            name="linkedIn"
                            defaultValue={props.article.form ? props.article.form.inputs.linkedIn : ''}
                            onChange={e => inputChangeHandler(e)}>
                        </textarea>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </div>
                    <div>
                        <textarea
                            className="email"
                            name="email"
                            defaultValue={props.article.form ? props.article.form.inputs.email : ''}
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
                            defaultChecked={props.article.form ? props.article.form.myConnections.twitter : false}
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="twitter">Twitter</label>
                        <input
                            type="checkbox"
                            name="linkedIn"
                            value="linkedIn"
                            defaultChecked={props.article.form ? props.article.form.myConnections.linkedIn : false}
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input 
                            type="checkbox" 
                            name="facebook" 
                            value="facebook" 
                            defaultChecked={props.article.form ? props.article.form.myConnections.facebook : false}
                            onClick={e => myConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="facebook">Facebook</label>
                        <input 
                            type="checkbox" 
                            name="email" 
                            value="email" 
                            defaultChecked={props.article.form ? props.article.form.myConnections.email : false}
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
                            defaultChecked={props.article.form ? props.article.form.advisorConnections.twitter : false} 
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="twitter">Twitter</label>
                        <input 
                            type="checkbox" 
                            name="linkedIn" 
                            value="linkedIn" 
                            defaultChecked={props.article.form ? props.article.form.advisorConnections.linkedIn : false}
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="linkedIn">LinkedIn</label>
                        <input 
                            type="checkbox" 
                            name="facebook" 
                            value="facebook" 
                            defaultChecked={props.article.form ? props.article.form.advisorConnections.facebook : false}
                            onClick={e => advConnectionsHandler(e)}>
                        </input>
                        <label htmlFor="facebook">Facebook</label>
                        <input 
                            type="checkbox" 
                            name="email" 
                            value="email" 
                            defaultChecked={props.article.form ? props.article.form.advisorConnections.email : false}
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
            <button type="button" onClick={props.close}>X</button>
        </div>
    );
}

export default ShareArticle;