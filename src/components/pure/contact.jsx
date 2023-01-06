import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';
import '../../styles/task.scss';

const ContactComponent = ( { contact, changeStatus, remove } ) => {

    function printStatus(){
        if(contact.online) {
           return(<i className="bi bi-toggle2-on task-action" onClick={() => changeStatus(contact)} style={{color: 'green'}}/>);
        } else {
            return(<i className="bi bi-toggle2-off task-action" onClick={() => changeStatus(contact)} style={{color: 'red'}}/>);
        }
    }


    return (
        <tr className='border'>
            <td>
                <span className='ms-2'>{ contact.name }</span>
            </td>
            <td>
                <span className='align-middle'>{ contact.surname }</span>
            </td>
            <td>
                <span className='align-middle'>{ contact.email }</span>
            </td>

            <td>
                <span className='align-middle'>{ printStatus() }</span>
            </td>
            <td>
            <i className='bi bi-trash task-action' style={{color:'tomato'}} onClick={()=>(remove(contact))}/>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact).isRequired,
    changeStatus : PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired,
};


export default ContactComponent;
