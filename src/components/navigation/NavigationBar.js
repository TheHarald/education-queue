import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './NavigationBar.css'

function NavigationBar(props) {
    return (
        <div className='nav-items'>
            <Link className='nav-item' to='/group'>Группа</Link>
            <Link className='nav-item' to='/queue'>Очередь</Link>
            <Link className='nav-item' to='/create'>Создать очередь</Link>
        </div>


    );
}

export default NavigationBar;