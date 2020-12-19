import React from 'react';
import { Pagination, Row, Col, Badge } from 'react-bootstrap';

const PaginationItem = ({ postPerPage, totalPost, onPageChange, currentPage }) => {

    let active = currentPage;
    let pageNumbers = [];
    let totalNumberOfPages = Math.ceil(totalPost / postPerPage)
    for (let i = 1; i <= totalNumberOfPages; i++) {
        pageNumbers.push(i);
    }

    /**
     * If have more than 10 pages logic
     */
    let tempPageNumber = pageNumbers;
    if(pageNumbers.length <= 6){
        tempPageNumber = pageNumbers;
    } else {
        if ( currentPage>=1 && currentPage <= 3){
            tempPageNumber = [1, 2, 3, 4, '...', pageNumbers.length-1, pageNumbers.length];
        }
        else if(currentPage === 4){
            const sliced = pageNumbers.slice(0,5);
            tempPageNumber = [...sliced, ' ...', pageNumbers.length];
        }
        else if(currentPage > 4 && currentPage < pageNumbers.length-2){
            const sliced1 = pageNumbers.slice(currentPage-2, currentPage);
            const sliced2 = pageNumbers.slice(currentPage, currentPage+1);
            tempPageNumber = [1, 2, '... ', ...sliced1, ...sliced2, ' ...', pageNumbers.length];
        }
        else if(currentPage > pageNumbers.length - 3){
            const sliced = pageNumbers.slice(pageNumbers.length-4);
            tempPageNumber = [1, 2, '... ', ...sliced];
        }
    }

    return (
            <Row className='my-4 justify-content-md-center font-pagination-size '>
                <Col xs='auto' className="post-bg">
                    <Pagination >
                        <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(currentPage-1)}/>
                        {
                            tempPageNumber.map((page, index) => {
                                return(
                                    <Pagination.Item key={index} active={page === active} onClick={() => onPageChange(page)} >
                                        <Badge variant="light">{page}</Badge>
                                    </Pagination.Item>
                                )
                            })
                        }
                        <Pagination.Next disabled={currentPage === totalNumberOfPages} onClick={() => onPageChange(currentPage+1)}/>
                    </Pagination>
                </Col>
            </Row>
    )
};

export default PaginationItem;
