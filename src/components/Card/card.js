import React from 'react';
import { Card } from 'react-bootstrap';

const CardItem = () => (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text.</Card.Text>
            <Card.Text>Some quick example text.</Card.Text>
        </Card.Body>
    </Card>
);

export default CardItem;
