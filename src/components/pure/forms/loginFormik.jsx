import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);


const LoginFormik = () => {

    const initialValues = {
        email: '',
        password: ''
    };

    return (
        <div>
            <h4>Login</h4>
            <Formik 
                // * Valores iniciales del formulario
                initialValues={initialValues}
                // * Validación de campos de YUP
                validationSchema = {loginSchema}
                // * Evento SUBMIT
                // ? crea un método asíncrono
                onSubmit={async (values) =>{
                    // ? tarda 2 segundos en lanzar la acción
                    await new Promise((r) => setTimeout(r, 2000));
                    // ? luego manda la alerta con los valores de los Fields 
                    alert(JSON.stringify(values, null, 2));
                    // ? guardamos la información en el local storage del navegador
                    // ! SESSION STORAGE: DURA DURANTE ESA SESIÓN DEL NAVEGADOR
                    // ! LOCAL STORAGE: DURA PARA SIEMPRE
                    localStorage.setItem('credentials', values);
                }}
            >

                {/* Obtenemos las props desde Formik */}
                {/* Pintamos el form */}
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

                            <label htmlFor="email">E-mail</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                type="email"
                            />
                            
                            {/* Errores del email */}
                            {
                                errors.email && touched.email && (
                                    <ErrorMessage name="email" component="div"/>
                                    
                                )
                            }


                            <label htmlFor="password">Contraseña</label>
                            <Field 
                                id="password" 
                                name="password" 
                                placeholder="password" 
                                type="password" />

                            {/* Errores de la contraseña */}
                            {
                                errors.password && touched.password && (
                                    <ErrorMessage name="password" component="div"/>
                                )
                            }
                                
                            <button type="submit">Submit</button>
                            {isSubmitting ? (<p>Login you credentials...</p>) : null}
                        </Form>
                    );
                    }

                }
     
            </Formik>
        </div>
            
    );
}

export default LoginFormik;
