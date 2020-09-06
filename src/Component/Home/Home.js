import React from 'react';
import Body from './Body/Body';


const Home = (props) => {
    const posts = props.posts;
    return (
        <>
            {
                posts.map( post => <Body post={post} key={post.id}></Body>)
            }
        </>
    );
};

export default Home;