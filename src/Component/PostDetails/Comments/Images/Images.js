import React from 'react';

const Images = (props) => {
    const {picture} = props.image;
    const pic = picture.medium;
    console.log(pic);
    const imgContainer={
        height: "200px",
        padding: "20px"
    }
    const imgStyle = {
        borderRadius: "50%"
    }
    return (
        <div style={imgContainer}>
            <img style={imgStyle} src={pic} alt=""/>
        </div>
    );
};

export default Images;