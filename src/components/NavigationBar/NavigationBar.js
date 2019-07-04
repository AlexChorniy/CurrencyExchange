import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';

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

const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);

export default NavigationBar;
