import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function CardItem() {
    const cardInf = useSelector(store => store.cardItem);
    return (
        <React.Fragment>
            {
                cardInf.map(item => (
                    <Card key={item.r030} style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.txt}</Card.Title>
                            <Card.Text>{item.rate}</Card.Text>
                            <Card.Text>{item.exchangedate}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </React.Fragment>
    );
}

export default CardItem;
