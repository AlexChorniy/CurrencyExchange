import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import * as moment from 'moment';
import dengiImage from '../../assets/dengi_1280x960.jpg';


const Styles = styled.div`
    .jumbotron {
        background: url(${dengiImage}) no-repeat;
        background-size: cover;
        padding-top: 0px;
        padding-bottom: 0px;
        margin: 0;
        position: relative;
        z-index: -2;
        &__overlay {
            background-color: #000
            opacity: 0.3;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }
        &__title {
            margin: 0;
            margin-bottom: 0;
            color: #E0FFFF;
            text-align: center;
            font-size: 30px;
        }
        &__text {
            margin: 0;
            text-align: center;
            font-size: 30px;
            color: #E0FFFF;
        }
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo>
            <div className="jumbotron__overlay" />
            <Container>
                <h2 className="jumbotron__title">Welcome</h2>
                <p className="jumbotron__text">to our currency exchange</p>
                <p className="jumbotron__text">{`Today is ${moment().format('LL')}`}</p>
            </Container>
        </Jumbo>
    </Styles>
);

export default Jumbotron;
