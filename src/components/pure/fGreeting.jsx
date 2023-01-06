import React, {useState} from 'react';
import PropTypes from 'prop-types';

//  ============================================== Componente de tipo función ==============================================

const Fgreeting = (props) => {

    //const [variable, método para actualizarla] = useState(valor inical);   
    const [age, setAge] = useState(24);   

    const birthday = () => {
        setAge(age + 1);
    }

    return (
        <div>
                <h1>
                    ¡Hola, {props.name} desde compnente funcional! ¿Qué tal? 
                </h1>
                <h2>
                    Tu edad es de {age} años.
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>  
    );


};


Fgreeting.propTypes = {
    name : PropTypes.string,
};


export default Fgreeting;
