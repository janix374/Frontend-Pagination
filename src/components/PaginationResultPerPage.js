import React from 'react';
import { ButtonGroup, Row, Col, Button } from 'react-bootstrap';

const PaginationResultPerPage = ({ changeDisplayedResultsPerPage }) => {

    return (
        <Row>
            <Col>
                <ButtonGroup className='mr-2' aria-label='First group'>
                    <Button variant='outline-primary' value={5} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>5</Button>
                    <Button variant='outline-primary' value={10} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>10</Button>
                    <Button variant='outline-primary' value={20} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>20</Button>
                    <Button variant='outline-primary' value={50} onClick={(e)=>{changeDisplayedResultsPerPage(e)}}>50</Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
};

export default PaginationResultPerPage;
