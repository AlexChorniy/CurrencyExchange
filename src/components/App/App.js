import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import store from '../../store';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import Jumbotron from '../Jumbotron';
import dengiImage from '../../assets/dengi_1280x960.jpg';
import Card from '../Card';

const Styles = styled.div`
    .wrapper {
        background: url(${dengiImage}) no-repeat;
        background-size: cover;
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100%;
        position: relative;
        z-index: -2;
        &_overlay {
            background-color: #000
            opacity: 0.25;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
        }
    }
`;

const App = () => (
    <Provider store={store}>
        <Jumbotron />
        <NavigationBar />
        <Styles>
            <div className="wrapper">
                <div className="wrapper_overlay" />
                <Layout>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Card} />
                        </Switch>
                    </Router>
                </Layout>
            </div>
        </Styles>
    </Provider>
    );

export default App;
