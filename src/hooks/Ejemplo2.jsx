/**
 * Ejemplo de uso de: 
 * - useState()
 * - useRef() -> identificar valores o elemntos dentro de la vista
 * - useEffect() -> controlar los cambios en la vista
 */

import React, { useState, useRef, useEffect } from 'react'

function Ejemplo2() {

    /**
     * Vamos a crear dos contadores distintos
     * cada uno en un estado diferente
     */

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    /**
     * Vamos a crear una referencia con useRef para asociar una variable
     * con un elemento del DOM del componente (vista HTML)
     */

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }

    /**
     * Trabajando con useEffect() 
     */
    
    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente,
     * se ejecuta aquello que esté dentro del useEffect()
     */

    /*
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    });
    */

    /**
     * ? Caso 2: Ejecutar SOLO EN ALGUNOS CASOS un snippet de código
     * Cada vez que haya un cambio en contador1 ,
     * se ejecuta aquello que esté dentro del useEffect().
     * En caso de que cambie conatdor2, no habrá ejecución
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1]);

    /**
     * ? Caso 3: Ejecutar SOLO CUANDO CAMBIE CONTADOR 1 o CONTADOR 2
     * Cada vez que haya un cambio en contador1 ,
     * se ejecuta aquello que esté dentro del useEffect().
     * En caso de que cambie conatdor2, no habrá ejecución
     */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1 , contador2]);

  return (
    <div>
        <h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
        <h2>CONTADOR 1: {contador1}</h2>
        <h2>CONTADOR 2: {contador2}</h2>

        {/* Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>

        {/* Botones para incrementar los contadores */}
        <div>
            <button onClick={incrementar1}> Incrementar Contador 1 </button>
            <button onClick={incrementar2}> Incrementar Contador 2 </button>
        </div>
    </div>
    
  )
}

export default Ejemplo2