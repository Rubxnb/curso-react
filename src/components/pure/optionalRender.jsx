import React, {useState} from 'react';

let red = 100;
let green = 255;
let blue = 100;

// * (Expresión true) && expresión => se renderiza la expresión
// * (Expresión false) && expresión => no se renderiza la expresión

// ? Estilo para usuario logeado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green} ,${blue})`,
    color: 'white',

};

// ? Estilo para usuario no logeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'wjote',
    fontWeight: 'bold'

};

const LoginButton = ({loginAction, style}) => {
    return (
        <button onClick={loginAction} style={style}>Login</button>
    );
}

const LogoutButton = ({logoutAction, style}) => {
    return (
        <button onClick={logoutAction} style={style}>Logout</button>
    );
}


const OptionalRender = () => {

    const [access, setAccess] = useState(true);
    const [nMessage, setNMessage] = useState(0);

/*     const updateAccess = () => {
        setAccess(!access);
    } */

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }
    let optionalButton;

    if(access) {
        optionalButton = (<LogoutButton logoutAction={logoutAction} style = {loggedStyle}/>);
    } else {
        optionalButton = (<LoginButton loginAction={loginAction} style = {unloggedStyle}/>);
    }

    // unread messages
    let addMessages = () => {
        setNMessage(nMessage + 1);
    }


   /*  let text;

    if(access) {
        text= 'Logout';
    } else {
        text= 'Login';
    }

    let optionalButton  = (<button onClick={updateAccess}>{text}</button>); */

    return (
        <div>
        {/* Optional Button */}
            {optionalButton}

        {
            access ? 
            <div>
                {/* N Messages unread */}
            {nMessage > 0 && nMessage === 1 && <p>You have {nMessage} new message...</p>}
            {nMessage > 1 && <p>You have {nMessage} new messages...</p>}
            {nMessage === 0 && <p>There are no new messages</p>}
            <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message' : 'Add Message'}</button>
            </div> :
            null

        }

        
        </div>
    );
}

export default OptionalRender;
