import React, { useState} from 'react';
import { Task } from '../../models/task';
import { LEVEL } from '../../models/level'; 
import TaskComponent from '../pure/task';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Ejemplo 1', 'Descripción por defecto 1', true, LEVEL.HIGH);
    const defaultTask2 = new Task('Ejemplo 2', 'Descripción por defecto 2', false, LEVEL.NORMAL);
    const defaultTask3 = new Task('Ejemplo 3', 'Descripción por defecto 3', true, LEVEL.LOW);

    const taskList = [defaultTask1, defaultTask2, defaultTask3];
    // Estado del componente
    const [tasks, setTasks] = useState(taskList);

    function completedTask(task) {
        // cogemos la posicion de la tarea en la lista de tareas
        const index = tasks.indexOf(task);
        console.log(index);
        // nos hacemos una copia de las tareas con [...tasks]
        const tempTask = [...tasks];

        tempTask[index].completed = !tempTask[index].completed
        setTasks(tempTask);
    }

    function deleteTask(task){
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        console.log(task);
        tempTask.splice(index, 1);
        setTasks(tempTask);

    }

    function addTask(task){
        const tempTask = [...tasks];

        tempTask.push(task);
        setTasks(tempTask);

    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                {/* Card header */}
                    <div className='card-header p-3'>
                        <h5>Tus tareas:</h5>    
                    </div>
                {/* Card Body */}    
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position:'relative', heigth: '500px'}}>

                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Título</th>
                                    <th scope='col'>Descripción</th>
                                    <th scope='col'>Nivel</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasks.map((task, index) => {
                                        return(<TaskComponent key={ index } task={ task } complete={completedTask} remove={deleteTask}/>);
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm add={addTask}/>
                </div>
            </div>
        </div>
    );
};


export default TaskListComponent;
