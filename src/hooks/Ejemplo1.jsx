/*
Ejemplo de uso de un hook useState

Crear un componente de tipo función y acceder a su estado privado a través de un hook y, además, poder modificarlo
*/

import React, { useState } from 'react';


const Ejemplo1 = () => {

    //Valor inicial paral un contador
    const initialValue = 0;

    // Valor inicial para una personaç
    const initialPerson = {
        name : 'Rubén',
        email : 'ruben@gmail.com'
    }

    /**
     * Quermos que initialValue y initialPerson sean parte del estado del componente,
     * para así poder gestionar su cambio y que éste se vea reflejado en la vista
     * del comopnente
     */

    const [contador, setContador] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementCounter() {
        // ? funciónParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado privado de persona
     */
    function updatePerson() {
        // ? funciónParaCambiar(nuevoValor)
        if( contador%2 === 0){
            setPerson(
                {
                    name : 'Pepe',
                    email : 'pepe@gmail.com'
                }
            );
        } else {
            setPerson(initialPerson);
        }
        
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>PERSONA: {person.name} -  {person.email }</h2>
            <div>
                <button onClick={incrementCounter}> Incrementar Contador </button>
                <button onClick={updatePerson}> Actualizar Persona </button>
            </div>
        </div>
    );
};


export default Ejemplo1;

