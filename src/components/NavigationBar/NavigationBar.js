import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Nav,
    Navbar,
    Button,
    Dropdown,
} from 'react-bootstrap';
import styled from 'styled-components';
import * as moment from 'moment';
import getExchange from '../../api';
import ListItem from '../ListItem';
import {
    currencyUpdateFromAPI,
    yearsUpdate,
    monthUpdate,
    daysUpdate,
    yearsToggleUpdate,
    monthsToggleUpdate,
    daysToggleUpdate,
    currenciesToggleUpdate,
} from '../../actions';

const Styles = styled.div`
    .navbar {
        background-color: #272e34;
        display: flex;
        flex-flow: column;
        font-size: 20px;
    }
    .navbar-nav {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .nav-link {
        color: #E0FFFF;
        width: 27px;
    }
    .dropdown-menu {
        height: 300px;
        overflow: auto;
    }
    .dropdown-toggle {
        display: flex;
        align-items: center;
    }
    .currency-toggle {
        width: 272px;
    }
    .month-dropdown {
        width: 116px;
    }
`;

const NavigationBar = () => {
    const dispatch = useDispatch();
    const currencyInf = useSelector(store => store.currency);
    const yearsInf = useSelector(store => store.yearsArr);
    const monthsInf = useSelector(store => store.monthArr);
    const daysInf = useSelector(store => store.daysArr);
    const yearsToggleInf = useSelector(store => store.yearsToggleInf);
    const monthsToggleInf = useSelector(store => store.monthsToggleInf);
    const daysToggleInf = useSelector(store => store.daysToggleInf);
    const currenciesToggleInf = useSelector(store => store.currenciesToggleInf);
    const month = moment.months().filter(
        (item, index) => (index === moment().months() ? item : null),
    );
    const [getMonth, setMonth] = useState(month[0]);
    const [getYear, setYear] = useState(moment().format('YYYY'));
    const yearsAmount = 15;
    const fullDate = '20190603';
    useEffect(() => {
        getExchange(fullDate)
        .then((responce) => {
            dispatch(currencyUpdateFromAPI(responce.data));
        })
        .catch((reject) => {
            console.log('reject', reject);
        });
    }, [dispatch, fullDate]);
    useEffect(() => {
        dispatch(yearsUpdate(yearsAmount));
    }, [dispatch, yearsAmount]);
    useEffect(() => {
        dispatch(monthUpdate());
    }, [dispatch]);
    useEffect(() => {
        const daysInMonth = moment(`${moment().format('YYYY-MM')}`, 'YYYY-MM').daysInMonth();
        dispatch(daysUpdate(daysInMonth));
    }, [dispatch]);
    const showNews = () => {
        console.log('showNews');
    };
    const addToToggle = (value, branch) => {
        switch (branch) {
            case 'year':
                return dispatch(yearsToggleUpdate(value));
            case 'month':
                return dispatch(monthsToggleUpdate(value));
            case 'day':
                return dispatch(daysToggleUpdate(value));
            case 'currency':
                return dispatch(currenciesToggleUpdate(value));
            default:
            return dispatch(daysToggleUpdate(value));
        }
    };

    const changeHandler = () => {
        if (
            getMonth !== monthsToggleInf
            || getYear !== yearsToggleInf
        ) {
            setMonth(monthsToggleInf);
            setYear(yearsToggleInf);
            const monthInNumber = moment.months().map((elem, index) => (
                { id: `${index < 9 ? '0' : ''}${index + 1}`, txt: elem }
            )).filter(item => (
                item.txt === monthsToggleInf ? item : null
            ))[0].id;
            const daysInMonth = moment(`${yearsToggleInf}-${monthInNumber}`, 'YYYY-MM').daysInMonth();
            dispatch(daysUpdate(daysInMonth));
            if (daysToggleInf > daysInMonth) {
                dispatch(daysToggleUpdate(daysInMonth));
            }
        }
    };

    return (
        <Styles>
            <Navbar expand="lg">
                <Nav onChange={changeHandler()}>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic"><div className="currency-toggle">{currenciesToggleInf}</div></Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                currencyInf.map(item => (
                                    <Dropdown.Item key={item.r030}>
                                        <ListItem clickedLiItem={() => addToToggle(item.txt, 'currency')} href={`#/${item.r030}`} key={item.r030} {...item} name="currency" />
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">{daysToggleInf}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                daysInf.map(item => (
                                    <Dropdown.Item key={item.id}>
                                        <ListItem clickedLiItem={() => addToToggle(item.txt, 'day')} href={`#/${item.id}`} key={item.id} {...item} name="day" />
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic"><div className="month-dropdown">{monthsToggleInf}</div></Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                monthsInf.map(item => (
                                    <Dropdown.Item key={item.id}>
                                        <ListItem clickedLiItem={() => addToToggle(item.txt, 'month')} href={`#/${item.id}`} key={item.id} {...item} name="month" />
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">{yearsToggleInf}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                yearsInf.map(item => (
                                    <Dropdown.Item key={item.id}>
                                        <ListItem clickedLiItem={() => addToToggle(item.txt, 'year')} href={`#/${item.id}`} key={item.id} {...item} name="year" />
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button onClick={() => showNews()} type="submit" variant="outline-light">Submit</Button>
                </Nav>
            </Navbar>
        </Styles>
    );
};

export default NavigationBar;
