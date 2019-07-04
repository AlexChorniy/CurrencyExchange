import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import store from '../../store';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';
import Jumbotron from '../Jumbotron';

const App = () => (
    <Provider store={store}>
        <Jumbotron />
        <NavigationBar />
        <Layout>
            <Router>
                <div>
                    <Switch>
                        {/* <Route path="/" exact component={App} />
                         <Route path="/form" component={Form} />
                        <Route path="/news/:id" component={NewsPage} />
                        <Route path="*" component={PageNotFound} /> */}
                    </Switch>
                </div>
            </Router>
        </Layout>
    </Provider>
    );

export default App;
