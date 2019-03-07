import React from 'react';
import './Toolbar.css';
import Logo from "../../Logo/Logo";
import {Row} from 'react-materialize';
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar =(props) =>(
    <Row>
    <header className="Toolbar">
        <Logo />
        <NavigationItems />
    </header>
    </Row>
);

export default toolbar;