import React, {useRef} from 'react';
import { Contact } from '../../../models/contact';
import PropTypes from 'prop-types';

const ContactForm = ({addContact}) => {

    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();

    function add(e) {
        e.preventDefault();
        const contact = new Contact(
            nameRef.current.value, 
            surnameRef.current.value, 
            emailRef.current.value, 
            false);

        addContact(contact);
    }

    return (
        <form onSubmit={add} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control' placeholder='Nombre' required autoFocus/>
                <input ref={surnameRef} id='inputName' type='text' className='form-control form-control'  placeholder='Apellidos' required/>
                <input ref={emailRef} id='inputName' type='text' className='form-control form-control'  placeholder='E-mail' required/>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Añadir Contacto</button>
        </form>
    );
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
  };

export default ContactForm;
