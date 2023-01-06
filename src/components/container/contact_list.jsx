import React, {useState} from 'react';
import { Contact } from '../../models/contact';
import ContactComponent from '../pure/contact';
import '../../styles/task.scss';
import ContactForm from '../pure/forms/contactForm';

const ContactList = () => {

    const defaultContact1 = new Contact('Rubén', 'Bottle', 'rubxnb@gmail-com', true);
    const defaultContact2 = new Contact('Contact2', 'Contact2', 'Contact2@gmail-com', false);
    const defaultContact3 = new Contact('Contact3', 'Contact3', 'Contact3@gmail-com', true);

    const contactList = [defaultContact1, defaultContact2, defaultContact3];

    const [contacts, setContacts] = useState(contactList);

    function changeStatus(contact) {
        const index = contacts.indexOf(contact);
        const aux = [...contacts];

        aux[index].online = !aux[index].online
        setContacts(aux);
    }
    
    function remove(contact){
        const index = contacts.indexOf(contact);
        const aux = [...contacts];
        aux.splice(index, 1);
        setContacts(aux);
    }

    function addContact(contact){
        const aux = [...contacts];
        aux.push(contact);
        setContacts(aux);
    }


    function cardBody(){
        if(contacts.length === 0) {
            return(
                <span className='align-center'>Agenda vacía</span>              
            );
            
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellidos</th>
                            <th scope='col'>E-mail</th>
                            <th scope='col'>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, index) => { 
                                return (<ContactComponent 
                                key={index} 
                                contact={contact}
                                changeStatus={changeStatus}
                                remove={remove}
                                />);
                                })
                            }
                    </tbody>
                 </table>
            );
        }
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Agenda</h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', heigth: '500px'}}>
                        { cardBody() }
                        
                    </div>
                <ContactForm addContact={addContact}/>
                </div>
            </div>
        </div>
        
    );
};

export default ContactList;
