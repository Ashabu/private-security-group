import React from 'react';

const SymbolComponent = props => {

    const whiteSpaceCheck = () => {
        let letter = /^[a-zA-Z\s]*$/
        return letter.test(props.children)
    }
    return (
            <div className='symbol' style={{ paddingRight: whiteSpaceCheck() ? 10 : 0 }}>{props.children}</div>
           
    );
};
export default SymbolComponent;