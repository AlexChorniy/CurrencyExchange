import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Nav,
    Navbar,
    Dropdown,
    ButtonGroup,
    DropdownButton,
} from 'react-bootstrap';
import styled from 'styled-components';
import * as moment from 'moment';

const Styles = styled.div`
    .navbar {
        background-color: #272e34;
        display: flex;
        flex-flow: column;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 20px;
    }

    .navbar-nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .nav-link {
        color: #E0FFFF;
    }
`;

const NavigationBar = () => {
    const dispatch = useDispatch();
    const daysInMonth = moment(`${moment().format('YYYY-MM')}`, 'YYYY-MM').daysInMonth();
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Currency</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Day</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Month</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">Year</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
};

export default NavigationBar;
