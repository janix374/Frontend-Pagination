import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
            <ListGroup>
                {posts.map( post => {
                    return ( <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item> )
                })}
            </ListGroup>
    )
};

export default Posts;
