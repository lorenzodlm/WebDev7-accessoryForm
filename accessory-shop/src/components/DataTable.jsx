import React from 'react';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const DataTable = ({ data, onDelete, onSearch, onSort }) => {
    const sRef = useRef()

    const handleDelete = (index) => {
        console.log(`Delete ${index}`)
        onDelete(index)
    }

    const handleSearch = () => {
        const keyword = sRef.current.value
        onSearch(keyword)
    }

    const handleSortAsc = () => {
        onSort('asc')
    }

    const handleSortDesc = () => {
        onSort('desc')
    }

    return (
        <Container>
            <Row>
                <Col>
                    <input type="text" placeholder="Search..." ref={sRef} />{' '}
                    <Button variant="secondary" onClick={handleSearch}><i className="bi bi-search"></i> Search</Button>
                </Col>
                <Col>
                    Sort{' '}
                    <Button variant='outline-dark' onClick={handleSortAsc}><i className="bi bi-arrow-down"></i></Button>{' '}
                    <Button variant='outline-dark' onClick={handleSortDesc}><i className="bi bi-arrow-up"></i></Button>{' '}
                </Col>
            </Row>
            <Table variant="light" striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <i className="bi bi-trash" onClick={() => handleDelete(index)}></i>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default DataTable;