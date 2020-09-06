import React from 'react';



const Comments = (props) => {
    const {name, email, body} = props.commentDetail;
    const userContainer={
        borderBottom: "2px solid lightGray",
        height: "200px",
        padding: "20px"
    }
    return (
        <div style={userContainer}>
            <p>{body}</p>
            <h4><small>Commented By - </small> {name}</h4>
            <p>Email : {email}</p>
        </div>
    );
};

export default Comments;