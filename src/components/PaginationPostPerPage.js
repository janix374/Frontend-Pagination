import React from 'react';
import { ButtonGroup, Row, Col, Button } from 'react-bootstrap';

const PaginationPostPerPage = ({ changeDisplayedResultsPerPage, postPerPage }) => {

    let active = postPerPage;
    return (
        <Row className='my-4 justify-content-md-center'>
            <Col xs='auto'>
                <p className='font-weight-bold text-danger'>
                    Choose how many results you want to see per page
                </p>
                <div>
                    <ButtonGroup className='mr-2' aria-label='First group'>
                        <Button variant='outline-primary' active={active==5} value={5} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>5</Button>
                        <Button variant='outline-primary' active={active==10} value={10} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>10</Button>
                        <Button variant='outline-primary' active={active==20} value={20} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>20</Button>
                        <Button variant='outline-primary' active={active==50} value={50} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>50</Button>
                    </ButtonGroup>
                </div>
            </Col>
        </Row>
    )
};

export default PaginationPostPerPage;
