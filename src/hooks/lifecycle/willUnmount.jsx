/**
 * Ejemplo de uso del método de ciclo de vida WillUnmount
 * en componente clase y el hook del ciclo de vida 
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento cuando el componente va a desaparecer');
    }

    render() {
        return (
            <div>
                <h1>Will Unmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {
    
    useEffect(() => {
        return () => {
            console.log('Comportamiento cuando el componente va a desaparecer');
        }        
    }, []);
    //? Iría dentro del return porque es cuando queremos que sea por última vez
    
    return (
        <div>
            <h1>Will Unmount</h1>
        </div>
    );
}


