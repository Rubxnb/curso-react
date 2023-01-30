import React from 'react';

const AsyncExample = () => {

    async function generateNumber() {
        return 1; 
    }
 
    /**
     * ? Promesa: Tipo de dato para gestionar los procesos asíncronos
     * ? manera de repesentar un objeto que eventualmente se va a completar
     *  * resolve: para devolver el dato final
     *  * all: devolver información con todos los resultados de distintas promesas
     *  * reject: generar una promesa que ha sido rechazada por algún tipo de error
     *  * race: generar una promesa que se resuelve o se rechaza cuando otras promesas son resueltas o retrasadas
     *  * allSettled: comprobar cuando todas las promesas están listas
     *  * any: comprobar si cualquiera de las primesas han sido completadas
     * 
     *  ! hasta que una promesa no se resuelve, no tenemos el valor final del dato
     */
  
    async function generatePromiseNumber() {
        return Promise.resolve(2);
    }

    // ? .then manera en la que esperamos la resolución de la promesa
    // ? .catch capturar el error
    function obtainNumber()  {
        generateNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }

    function obtainPromiseNumber()  {
        generatePromiseNumber()
            .then((response) => alert(`Response: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));

    }

    async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key));
    }
     

    function showStorage() {
        saveSessionStorage('name', 'Rubxn')
            .then((response) => {
                let value = response;
                alert(`Saved name: ${value}`)
            })
            .catch((error) => alert(`Something went wrong: ${error}`)) 
            .finally(() => (console.log('Name saved and retreived successfuly')));
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello World!'), 2000)
        })

        let message = await promise;

        alert(`Message recieved: ${message}`)

    }

    // * .reject() nos permite rechazar la ejecución y devolver un error
    const returnError = async () => {
        await Promise.reject(new Error('Oooops!'))
    }
    
    const consumeError  = () => {
        returnError()
            .then(res => alert(`Everything is OK : ${res}`))
            .catch(error => alert(`Something went wrong: ${error}`))
            .finally(() => alert('Finally executed'))
    }
    
    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL')
            alert(`Response: ${JSON.stringify(response)}`)
        } catch(ex) {
            alert(`Something went wrong with your URL: ${ex}`)
        }
    } 

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2'),
            ]
        ).catch(error => alert(`Something went wrong with your URL's: ${error}`))
    }
    
    return (
        <div>
        <h1>Asycn, Promise Examples</h1>
            <button onClick={obtainNumber}> Obtain Number</button>
            <button onClick={obtainPromiseNumber}> Obtain Promise Number</button>
            <button onClick={showStorage}> Show Storage</button>
            <button onClick={obtainMessage}> Send message in 2s</button>
            <button onClick={consumeError}>Consume Error</button>
            <button onClick={urlNotFound}>URL Not Found</button>
        </div>
    );
}

export default AsyncExample;
