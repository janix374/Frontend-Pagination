import React from 'react';
import { ButtonGroup, Row, Col, Button } from 'react-bootstrap';

const PaginationPostPerPage = ({ changeDisplayedResultsPerPage, postPerPage }) => {

    let active = postPerPage;
    return (
        <Row className='my-4 justify-content-md-center'>
            <Col sm={8} className='text-center'>
                <h3>Post from <a href='https://jsonplaceholder.typicode.com/' target='_blank'>jsonplaceholder</a></h3>
                <p className='font-weight-bold text-title'>
                    Choose how many results you want to see per page
                </p>
            </Col>
            <Col sm={4}>
                <div>
                    <ButtonGroup className='mr-2' aria-label='First group'>
                        <Button variant='outline-primary' className='white-bg' active={active==5} value={5} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>5</Button>
                        <Button variant='outline-primary' className='white-bg' active={active==10} value={10} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>10</Button>
                        <Button variant='outline-primary' className='white-bg' active={active==20} value={20} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>20</Button>
                        <Button variant='outline-primary' className='white-bg' active={active==50} value={50} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>50</Button>
                    </ButtonGroup>
                </div>
            </Col>
        </Row>
    )
};

export default PaginationPostPerPage;
