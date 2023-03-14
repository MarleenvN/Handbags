import React from 'react';

function Button({isDisabled, clickHandler, children }) {
    return (
        <button
            disabled={isDisabled}
            type="button"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}

export default Button;