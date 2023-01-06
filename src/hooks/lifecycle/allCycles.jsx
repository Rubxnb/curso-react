import React, { useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('El componente se ha creado');
        /**
         * Cuando el componente aparece se genera un intervalo y
         * cada segundo se actualizá
         */
        const intervalID = setInterval(() =>  {
            document.title = `${new Date()}`;
            console.log('Actualización del componente');
        }, 1000);

        return () => {
            console.log('El componente va a desaparecer');
            document.title = 'El tiempo se ha detenido';
            clearInterval(intervalID);
        };

    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
