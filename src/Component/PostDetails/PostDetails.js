import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './postDetails.css'
import Comments from './Comments/Comments';
import Images from './Comments/Images/Images';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    const { title, body } = post;

const [comments, setComments] = useState([]);
useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
}, []);


const [images, setImages] = useState([]);
useEffect( () => {
    const url = `https://randomuser.me/api/?results=5`;
    fetch(url)
    .then( res => res.json())
    .then( data => setImages(data.results));
}, []);
// console.log(images);

    return (
        <>
            <div className="post-details-container">
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
            <h2 style={{margin: "3% 4%"}}> All The Comments : </h2>
            <div className="comments-container">
                <div>
                    {
                        images.map( img => <Images key={img.cell} image={img}></Images>)
                    }
                </div>
                <div>
                    {
                        comments.map( comment => <Comments key={comment.id} commentDetail={comment}></Comments>)
                    }
                </div>
                
            </div>
        </>
    );
};

export default PostDetails;