import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const Posts = ({ posts, loading }) => {

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h3>Post from <a href='https://jsonplaceholder.typicode.com/' target='_blank'>jsonplaceholder</a></h3>
            <ListGroup>
                {posts.map( post => {
                    return ( <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item> )
                })}
            </ListGroup>
        </div>
    )
};

export default Posts;
