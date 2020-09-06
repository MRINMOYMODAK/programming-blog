import React from 'react';

const NotFound = () => {
    const textStyle = {
        textAlign : "center"
    }
    return (
        <div>
            <h4 style={textStyle}>Page Not Found</h4>
            <h3 style={textStyle}>Error : 404</h3>
        </div>
    );
};

export default NotFound;