import React from 'react';
import {useLocation, useSearchParams} from 'react-router-dom';

const StatePage = () => {
    
    const [searchParams] = useSearchParams();
    
    console.log('Query params ', searchParams.get('online'));

    return (
        <div>
        <h1>Prueba</h1>
            <h1>State {searchParams.get('online') === true ? 'Online' : 'Offline'}</h1>
        </div>
    );
}

export default StatePage;
