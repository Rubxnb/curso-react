import React, { Component } from 'react';
import PropTypes from 'prop-types';

//  ============================================== Componente de tipo clase ==============================================

class Greeting extends Component {


    constructor(props) {
        super(props);
        this.state = {
            age : 24
        };
    }

    render() {
        return (
            <div>
                <h1>
                    ¡Hola, {this.props.name}! ¿Qué tal? 
                </h1>
                <h2>
                    Tu edad es de {this.state.age} años.
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) =>(
            {
                age: prevState.age + 1
            }
        ));
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
