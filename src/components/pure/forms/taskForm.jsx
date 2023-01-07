import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { LEVEL } from '../../../models/level';
import { Task } from '../../../models/task';

const TaskForm = ({add, length}) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVEL.NORMAL);

  function addTask(e){
    e.preventDefault(); 
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )

    add(newTask);
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4 p-3'>
      <div className='form-outline flex-column justify-content-evenly align-items-center d-flex'  style={{height: '200px'}}>
        <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Nombre' required autoFocus/>
        <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' placeholder='Descripción' required />
        <div className='d-flex justify-content-start w-100'>
        
        <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVEL.NORMAL} id='selectLevel'>
          <option value={LEVEL.NORMAL}> Normal </option>
          <option value={LEVEL.LOW}> Bajo </option>
          <option value={LEVEL.HIGH}> Alto </option>
          <option value={LEVEL.URGENT}> Urgente </option>
          <option value={LEVEL.MEDIA}> Medio </option>
          <option value={LEVEL.BLOCKING}> Bloqueante </option>
        </select>
        </div>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Añadir Tarea' : 'Crear Tarea'}</button>
    </form>
  );
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
};
export default TaskForm
