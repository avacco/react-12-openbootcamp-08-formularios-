import React from 'react';
import { Tarea } from '../../../models/tarea.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NIVEL } from '../../../models/niveles.enum';

const RegisterFormik = () => {
  
  let tarea = new Tarea();
  
  const initialValues = {
    titulo: '',
    descripcion: '',
    nivel: NIVEL.NORMAL
  }

  const registerSchema = Yup.object().shape(
    {
      titulo: Yup.string()
        .min(3, 'El título de la tarea debe tener un mínimo de 3 caracteres.')
        .max(24, 'El título de la tarea debe tener un máximo de 24 caracteres.')
        .required('Se requiere un titulo.'),
      descripcion: Yup.string()
        .min(4,'La descripción debe ser mayor a 4 caracteres.')
        .max(255, 'La descripción excede el limite de caracteres (255).')
        .required('Se necesita una breve descripción de la tarea.'),
      nivel: Yup.string()
        .oneOf([NIVEL.NORMAL, NIVEL.URGENTE, NIVEL.BLOQUEANTE], 'Debes seleccionar un nivel de la tarea: Normal / Urgente / Bloqueante')
        .required('Se requiere seleccionar el nivel de la tarea.'),
     
    }
  );

  const submit = () => {
    console.log('register user') 
  }

  return (
    <div>
      <h4>Registro Formik</h4>
      <Formik
      // Valores iniciales
        initialValues = {initialValues}
      // Esquema de validacion con Yup
        validationSchema= {registerSchema}
      // Evento onSubmit
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2))
        }}
      >

        {({values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur}) => (
                <Form>
                  <label htmlFor='titulo'>Título: </label><br/>
                  <Field id='titulo' type='text' name='titulo' placeholder='Titulo'/>

                    {/* Error de titulo */}
                  {
                    errors.titulo && touched.titulo && 
                    (
                      <ErrorMessage name='titulo' component='div'/>
                    )
                  }
<br/>
                  <label htmlFor='descripcion'>Descripción: </label><br/>
                  <Field id='descripcion' name='descripcion' component='textarea' placeholder='Descripción de la tarea a realizar.'/>

                  {/* Error de descripción */}
                  {
                    errors.descripcion && touched.descripcion && 
                    (
                      <ErrorMessage name='descripcion' component='div'/>
                    )
                  }
<br/>
                  <label htmlFor='nivel'>Nivel: </label><br/>
                  <Field as="select" id='nivel' name='nivel'>
                    <option value={NIVEL.NORMAL}>Normal</option>
                    <option value={NIVEL.URGENTE}>Urgente</option>
                    <option value={NIVEL.BLOQUEANTE}>Bloqueante</option>
                  </Field>

                  
<br/>
                  <button type='submit'>Registrar tarea</button>
                  {isSubmitting ? (<p>Registrando tarea...</p>) : null}

                </Form>
              )}

      </Formik>
    </div>
  );
}

export default RegisterFormik;
