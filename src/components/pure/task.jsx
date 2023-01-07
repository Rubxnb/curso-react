import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task';
import '../../styles/task.scss';
import { LEVEL } from '../../models/level';

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log(`Tarea ${task.name} creada`);
        return () => {
            console.log(`La tarea ${task.name} va a ser eliminada`);
        };
    }, [task]);

    /**
     * Function that returns a badge 
     * depending on the level of the task
     */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVEL.LOW:
                return (<h6 className='mb-0'> <span className='badge bg-success'> {task.level}</span></h6> );
            case LEVEL.HIGH:
                return (<h6 className='mb-0'> <span className='badge bg-warning'> {task.level}</span></h6> );
            case LEVEL.NORMAL:
                return (<h6 className='mb-0'> <span className='badge bg-info'> {task.level}</span></h6> );
             case LEVEL.URGENT:
                return (<h6 className='mb-0'> <span className='badge bg-secondary'> {task.level}</span></h6> );
            case LEVEL.MEDIA:
                return (<h6 className='mb-0'> <span className='badge bg-primary'> {task.level}</span></h6> );
            case LEVEL.BLOCKING:
                return (<h6 className='mb-0'> <span className='badge bg-danger'> {task.level}</span></h6> );

            default:
                return (<h6 className='mb-0'> <span> {task.level}</span></h6>);
        }
    }

    function printStatusIcon(){
        if(task.completed) {
            return (<i className='bi bi-check-circle task-action' style={{color:'green'}} onClick={() =>complete(task)}/>);
        } else {
            return (<i className='bi bi-slash-circle task-action' style={{color:'red'}} onClick={() =>complete(task)}/>);
        }
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    
    };

    const taskPending = {
        color: 'tomato',
        fontWeight: 'bold',
    };


    return (
        <tr className='fw-normal task-pending' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                { printStatusIcon() }                
            <i className='bi bi-trash task-action' style={{color:'tomato'}} onClick={()=>(remove(task))}/>
            </td>
        </tr>
        
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default TaskComponent;
