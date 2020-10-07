import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

const Posts = ({ posts, isLoading }) => {

    return (
        <Row className='my-4 '>
            <Col>
                { isLoading ? ( <div>Loading ...</div>
                ):(
                    <ListGroup>
                        {posts.map((post) => {
                            return (<ListGroup.Item key={post.id}><span className='text-primary'>{post.id}. </span>
                                <span>{post.title}</span></ListGroup.Item>)
                        })}
                    </ListGroup>
                )
                }
            </Col>
        </Row>
    )


};

export default Posts;
