import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useLogger } from './hooks/useLogger';
import Main from './Main';
import LogIn from './pages/LogIn';


function App(props) {
    const [isLogged, setIsLogged] = useState(true)
    useLogger('isLogged:', isLogged)
    return (
        <div>
            {isLogged ?
                <Main setIsLogged={setIsLogged} />
                :
                <LogIn setIsLogged={setIsLogged} />
            }
        </div>
    );
}

export default App;