import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .currency__item {
        font-size: 15px;
    }
`;
let text = '';

const ListItem = ({ name, txt, clickedLiItem }) => {
    if (
        name === 'currency'
        || name === 'year'
        || name === 'month'
        || name === 'day'
    ) {
        text = txt;
    }
    return (
        <Styles>
            <li onClick={clickedLiItem} className="list__item">
                {
                    text
                }
            </li>
        </Styles>
    );
};

export default ListItem;
