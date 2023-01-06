import React, { useRef} from 'react';

const Child = ( {name, send, update} ) => {   

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pulsarBoton()   {
        const text = messageRef.current.value;
        alert(`Text in input: ${text}`);
    }

    function pulsarBotonTexto(text)   {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        /* para que no recargue la página */
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div>
            <h4>{name}</h4>
            <p onMouseOver={() => console.log('On Mouse Over')}>Child component</p>
            <button onClick={() => console.log('Botón 1 pulsado')}> Botón 1</button>
            <button onClick={pulsarBoton}> Botón 2</button>
            <button onClick={() => pulsarBotonTexto('Rubén')}> Botón 3</button>
            <input placeholder='placeholder' 
                onFocus={() => console.log('On Focus')}
                onChange={(e) => console.log('On Change: ', e.target.value)}
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='Your Name' />
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
};


export default Child;
