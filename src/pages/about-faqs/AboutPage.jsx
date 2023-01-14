import React from 'react';
import {useLocation, useNavigate} from  'react-router-dom';

const AboutPage = () => {

    /* Ruta actual */
    const location = useLocation();
    /* Ruta de navegación */
    const navigate = useNavigate();
    return (
        <div>
            <h1> About | FAQ's page </h1>
            <div>
                <button onClick={() => navigate('/')}> Go To Home </button>
                <button onClick={() => navigate(-1)}> Go Back </button>
                <button onClick={() => navigate(+1)}> Go Forward </button>
            </div>
        </div>
    );
}

export default AboutPage;
