import React, {useState} from 'react'
import Child from '../pure/child'

const Father = ()  =>{

    const [name, setName] = useState('Rubén');

    function showMesage(text) {
        alert(`Message received: ${text}`);
    }

    function updateName(name){
        setName(name);
    }

    return (
        <div>
            <Child name={name} send={showMesage} update={updateName}/>
        </div>
    )
}


export default Father
