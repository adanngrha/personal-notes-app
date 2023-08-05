import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/notes/add'>Tambah</Link></li>
                <li><Link to='/archive'>Arsip</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;