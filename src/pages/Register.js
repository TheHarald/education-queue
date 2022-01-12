import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <div>
            <h1>Rerister</h1>
            <Link to='/login'> Вернуться к аворизации</Link>
        </div>
    );
}

export default Register;