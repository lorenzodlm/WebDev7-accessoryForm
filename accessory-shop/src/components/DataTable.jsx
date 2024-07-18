import React from 'react';
import Table from 'react-bootstrap/Table';


const DataTable = ({ data }) => {
    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;