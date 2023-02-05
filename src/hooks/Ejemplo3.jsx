/**
 * Ejemplo de uso de: 
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor 
 * que recibe desde el padre
 */

// Inicializamos un esatdo que va a rellenarse
//con los datos del padre
const miContexto = React.createContext(null);

const Componente1 = () => {
    
    const { token } = useContext(miContexto);

    return (
        <div>
            <h1>El Token es: {token} </h1>     
            {/* Pintamos el componente 2*/} 
            {/* <Componente2/> */}
        </div>
    );
}

const Componente2 = () => {

    const {sesion} = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: {sesion}</h2>           
        </div>
    );
}



function MiComponenteConContexto() {

    const initialState = {
        token : '12345',
        sesion: 1
    }

    // Creamos el esatdo del componente
    const [sessionData, setSessionData] = useState(initialState);

    function actualizarSesion() {
        setSessionData(
            {
                token :'JWTASDF23',
                sesion: sessionData.sesion + 1
            }
        );
    }

  return (
    <miContexto.Provider value={sessionData}>
    {/* Todo lo que está aquí dentro puede leer los datos de sessionData */}
    {/* Además, si se actualizan los componentes de aquím, también lo actualian */}
        <h1>Ejempo de useState() y useContext() </h1>
        <Componente1/>
        <Componente2/>
        <button onClick={actualizarSesion} > Actualizar Sesión</button>
    </miContexto.Provider>
  )
}

export default MiComponenteConContexto