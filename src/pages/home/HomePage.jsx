import React from 'react';
import {useLocation, useNavigate} from  'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
                <button onClick={() => navigate('/profile')}> Go To Profile </button>
        </div>
    );
}

export default HomePage;
