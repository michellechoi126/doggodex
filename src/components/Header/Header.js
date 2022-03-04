import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

function Header(props) {
    return (
        <header className="header">
            <Link to='/'>
                <div className="logo-title">
                    <img src={logo} alt="logo" className="logo"/>
                    <h1 className="title">Doggodex</h1>
                </div>
            </Link>
        </header>
    );
}

export default Header;