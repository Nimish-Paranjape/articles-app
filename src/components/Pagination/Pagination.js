import React from 'react';
import Aux from '../../containers/hoc/auxilliary';

const pagination = props => {
    let previousPage = null;
    let nextPage = null;
    let buttons = [];
    const currentPage = props.page;
    if(currentPage>1){
        previousPage = currentPage - 1;
        buttons.push(
            <button 
                key={previousPage} 
                value={previousPage} 
                onClick={e => props.navigate(e)}>
            {previousPage}
            </button>
        );
    }
    buttons.push(
        <button 
            key={currentPage} 
            value={currentPage} 
            onClick={e => props.navigate(e)}>
        {currentPage}
        </button>
    );
    if(currentPage*2<props.totalItems){
        nextPage = currentPage + 1;
        buttons.push(
            <button 
                key={nextPage} 
                value={nextPage} 
                onClick={e => props.navigate(e)}>
            {nextPage}
            </button>
        );
    }
    return (
        <Aux>
            {buttons}
        </Aux>
    );
}

export default pagination;