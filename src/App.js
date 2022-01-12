import React from 'react';
import { BrowserRouter, Link, Outlet, Route, Router, Routes } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import { useLogger } from './hooks/useLogger';
import Main from './Main';
import LogIn from './pages/LogIn';
import Register from './pages/Register';


function App(props) {
    return (
        <Routes>
            <Route path='/*' element={<Main />} />
            <Route path='login' element={<LogIn />} />
            <Route path='register' element={<Register />} />
        </Routes>
    );
}




export default App;