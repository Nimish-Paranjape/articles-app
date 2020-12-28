import React from 'react';
import './Backdrop.css';

const backdrop = props => (
    <div className="backdrop" onClick={() => props.click(false)}></div>
)

export default backdrop;