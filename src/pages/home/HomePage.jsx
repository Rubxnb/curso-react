import React from 'react';
import {createSearchParams, useNavigate} from  'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();
    
    const  navigateProps = (path) => {
        navigate( 
            {
            pathname: path,
            search: createSearchParams({online: false}).toString(),
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
                <button onClick={() => navigate('/profile')}> Go To Profile </button>
                <button onClick={() => navigateProps('state')}> Go To state </button>
        </div>
    );
}

export default HomePage;
