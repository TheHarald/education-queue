import React from 'react';
import { useState } from 'react/cjs/react.development';
import Main from './Main';
import LogIn from './pages/LogIn';


function App(props) {
    const [isLogged, setIsLogged] = useState(true)


    return (
        <div>
            {isLogged ?
                <Main />
                :
                <LogIn />
            }
        </div>
    );
}

export default App;