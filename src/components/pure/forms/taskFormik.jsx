import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { LEVEL } from '../../../models/level';


const TaskFormik = () => {

    const levels = [LEVEL.BLOCKING, LEVEL.HIGH, LEVEL.LOW, LEVEL.MEDIUM, LEVEL.NORMAL, LEVEL.URGENT];
    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().required('Nombre requerido'),
            description: Yup.string().required('Descripción requerida'),
            level: Yup.string().oneOf(levels, 'Nivel requerido')
        });

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVEL.NORMAL
    }

    return (
        <div>
            <h4>Añadir Tarea</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                }}>

                {({values, touched, errors, isSubmitting, handleChange, handleBlur}) => {
                    return (
                        <Form>
                            <label htmlFor="name">Nombre</label>
                            <Field id="name" name="name" placeholder="Nombre"/>
                            {
                                errors.name && touched.name && (
                                    <ErrorMessage name="name" component="div"/>
                                )
                            }
                            <label htmlFor="description">Descripción</label>
                            <Field id="description" name="description" placeholder="Descripcion"/>
                            {
                                errors.description && touched.description && (
                                    <ErrorMessage name="description" component="div"/>
                                )
                            }
                            <label htmlFor="level">Nivel</label>
                            <select className='form-control form-control-lg' name="level" defaultValue={LEVEL.NORMAL} id='level'>
                                <option value={LEVEL.NORMAL}> Normal </option>
                                <option value={LEVEL.LOW}> Bajo </option>
                                <option value={LEVEL.HIGH}> Alto </option>
                                <option value={LEVEL.URGENT}> Urgente </option>
                                <option value={LEVEL.MEDIA}> Medio </option>
                                <option value={LEVEL.BLOCKING}> Bloqueante </option>
                            </select>
                            {
                                errors.level && touched.level && (
                                    <ErrorMessage name="level" component="div"/>
                                )
                            }

                            <button type="submit">Añadir tarea</button>
                            {isSubmitting ? (<p>Añadiendo tarea ...</p>) : null}
                        </Form>
                    );
                }}

            </Formik>
        </div>
    );
}

export default TaskFormik;
