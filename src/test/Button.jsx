import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} data-testid="custom-button" className="btn btn-primary">
            {children}
        </button>
    );
};

export default Button;