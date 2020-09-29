import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Posts from './Posts';
import PaginationComponent from './PaginationComponent';
import PaginationResultPerPage from './PaginationResultPerPage';

const PaginationLogic = ({ someData, loading }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(15);

    //Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = someData.slice(indexOfFirstPost, indexOfLastPost);

    const onPageChange = (pageNumber) => {
        if(pageNumber === '...' || pageNumber === ' ...'){
            setCurrentPage(currentPage+2);
        } else if (pageNumber === '... '){
            setCurrentPage(currentPage-2);
        } else {
            setCurrentPage(pageNumber);
        }
    };

    const changeDisplayedResultsPerPage = (e) => {
        setCurrentPage(1);
        setPostPerPage(e.target.value);
    };

    return (
        <Container>
            <h3>Post from <a href='https://jsonplaceholder.typicode.com/' target='_blank'>jsonplaceholder</a></h3>
            <Posts posts={currentPosts} loading={loading}/>
            <PaginationComponent postPerPage={postPerPage} totalPost={someData.length} onPageChange={onPageChange} currentPage={currentPage} />
            <PaginationResultPerPage changeDisplayedResultsPerPage={changeDisplayedResultsPerPage}/>
        </Container>
    )
};

export default PaginationLogic;
