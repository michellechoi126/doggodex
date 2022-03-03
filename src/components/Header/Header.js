import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <h1>
                <Link to='/'>Doggodex</Link>
            </h1>
        </header>
    );
}

export default Header;