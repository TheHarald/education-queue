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

        // <div>

        //     <Routes>
        //         <Route path='login' element={<Log />} />
        //         <Route path='/' element={<Layout />}>

        //             <Route index element={<Home />} />
        //             <Route path='about' element={<About />} />
        //             <Route path='test/*' element={<Test />} />
        //         </Route>

        //     </Routes>
        // </div>

    );
}

function Home() {
    return (<div>
        <h2>home</h2>
    </div>)
}

function Log() {
    return (<div>
        <h2>Login</h2>
    </div>)
}

function Header() {
    return (<div>
        <h2>Header</h2>
    </div>)
}

function About() {
    return (<div>
        <h2>about</h2>
    </div>)
}

function Test() {
    return (<div>
        <h2>test</h2>
        <Link to='test2'>test2</Link>
        <Routes>
            <Route path='test2' element={<Test2 />} />
            <Route path='topisc' element={<Topics />} />
        </Routes>

    </div>)
}

function Test2() {
    return (<div>
        <h2>test2</h2>
    </div>)
}

function Topics() {
    return <div>
        <h2>Topics</h2>

    </div>
}

function Layout() {
    return (<div>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='test'>Test</Link>
        <Link to='login'>exit</Link>
        <Outlet />
    </div>)
}

export default App;