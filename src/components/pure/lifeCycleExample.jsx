/**
 * Ejemplo de componente de tipo clase que dispone 
 * de los métodos de ciclo de vida
 */

import React, { Component, /*Components*/ } from 'react';
//import PropTypes from 'prop-types';

class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILL MOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DID MOUNT: Justo al acabar el montaje del componente antes de pintarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILL RECEIVE PROPS: Si el componente va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /** 
         * Sirve para controlar si el componente debe o no actualizarse
         */

        //* return true | false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILL UPDATE: Antes de la actualización del componente');
    }

    componentDidlUpdate(nextProps, nextState) {
        console.log('DID UPDATE: Justo después de la actualización del componente');
    }

    componentWillUnmount(){
        console.log('UNMOUNT: Cuando va a desaparecer el componente');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

}

export default LifeCycleExample;