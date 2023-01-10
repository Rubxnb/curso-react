import React from 'react';
import {Formik, Field, Form, ErrorMessage, yupToFormErrors} from 'formik';
import * as Yup from 'yup';
import { ROL } from '../../../models/rol';


const RegisterFormik = () => {

    const initialValues = {
        userName: '',
        email: '',
        password: '',
        // ! Confirmación de la contraseña
        confirm: '',
        role: ROL.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string()
                .min(6, 'Nombre de usuario muy corto')
                .max(12, 'Nombre de usuario muy largo')
                .required('Nombre de usuario requerido'),
            email: Yup.string().email('Formato de email no válido').required('Email requerido'),
            password: Yup.string()
                .min(8, 'Contraseña muy corta')
                .required('Contraseña requerida'),
            confirm: Yup.string()
            // ? Cuando la contraseña esté rellena, salta esto
                .when("password", {
                    // ? Comprueba que el valor de la contraseña está relleno
                    is: value => (value && value.length > 0 ? true : false),
                    // ? Si es así, comprueba que ambos valores son iguales
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Las contraseñas deben coincidir'
                    )
                })
                .required('Contraseña de confirmación requerida'),
                /* rol: Yup.string()
                .oneOf([ROL.USER, ROL.ADMIN], 'Debes seleccionar un rol')
                .required('Rol requerido') */
        }

    );


    const submit = (values) => {
        alert('User registered');
    }

    return (
        <div>
            <h4> Register Formik</h4>
            <Formik 
                initialValues={initialValues}
                validationSchema ={registerSchema}
                onSubmit={async (values) =>{
                    await new Promise((r) => setTimeout(r, 2000));
                    alert(JSON.stringify(values, null, 2));
                }}>

{ ({
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } ) => {
                        return (
                        <Form>

                            <label htmlFor="userName">Nombre de Usuario</label>
                            <Field id="userName" name="userName" placeholder="User Name"/>

                             {/* Errores del username */}
                             {
                                errors.userName && touched.userName && (
                                    <ErrorMessage name="userName" component="div"/>
                                )
                            }

                            
                            <label htmlFor="email">E-mail</label>
                            <Field id="email" name="email" placeholder="example@example.com" type="email"/>

                            {/* Errores del email */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name="email" component="div"/>
                                )
                            }

                            <label htmlFor="password">Contraseña</label>
                            <Field id="password" name="password" placeholder="password" type="password" />

                            {/* Errores de la contraseña */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name="password" component="div"/>
                                )
                            }
                                
                            <label htmlFor="confirm">Confirmar contraseña</label>
                            <Field id="confirm" name="confirm" type="password" />

                            {/* Errores del confirm */}
                            {
                                errors.confirm && touched.confirm && (
                                    <ErrorMessage name="confirm" component="div"/>
                                )
                            }

                            <button type="submit">Registrarse</button>
                            {isSubmitting ? (<p>Enviando tus credenciales...</p>) : null}
                        </Form>
                    );
                    }

                }
            </Formik>
        </div>
    );
}

export default RegisterFormik;
