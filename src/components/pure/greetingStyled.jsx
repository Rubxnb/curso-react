import React, {useState} from 'react';

// Definiendo estilos en constantes

// ? Estilo para usuario logeado
const logStyle = {
    color: 'white',

};

// ? Estilo para usuario no logeado
const unlogStyle = {
    color: 'tomato',
    fontWeigth: 'bold'

};

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);
    
    function changeLog() {
        setLogged(!logged);
    }

    const greetingUser = (<p>Hello, {props.name} </p> );
    const pleaseLogin = (<p> Please, Login! </p>);

    return (
        <div style={ logged ? logStyle : unlogStyle}>
            {/* {logged ? (<p>Hello, {props.name} </p> ): (<p> Please, Login! </p>)} */}
            
            { logged ? greetingUser : pleaseLogin}
            
            <button onClick={changeLog}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};



export default GreetingStyled;
