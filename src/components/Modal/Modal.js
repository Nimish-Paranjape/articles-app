import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../containers/hoc/auxilliary';

const modal = props => (
    <Aux>
        <Backdrop click={props.click} />
        <div className="modal">
            {props.children}
        </div>
    </Aux>
)

export default modal;