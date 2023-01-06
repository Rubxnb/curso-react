/**
 * Ejemplo de uso del método de ciclo de vida DidUpdate
 * en componente clase y el hook del ciclo de vida 
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado');
    }

    render() {
        return (
            <div>
                <h1>Did Update</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado');
    });
    //? Sin [], se ejecuta siempre
    return (
        <div>
            <h1>Did Update</h1>
        </div>
    );
}


