import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
  {
    // Validaciones. Email y password deben ser strings y son necesarios, el primero con el formato convencional para un correo.
    email: Yup.string().email('Formato inválido').required('Es necesario una dirección de correo'),
    password: Yup.string().required('Requiere una contraseña')
  }
);



const LoginFormik = () => {

  const initialCredentials = {
    email: 'inicial',
    password: '123'
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
      // Toma valores iniciales antes declarados
        initialValues={ initialCredentials }
      // Añade validación a traves de un esquema hecho con Yup
        validationSchema={ loginSchema }
      // Muestra en una alerta los valores enviados
        onSubmit={ async (values) => {
          await new Promise((r) => setTimeout(r,1500));
          alert(JSON.stringify(values,null,2));
      // Guarda las credenciales en el almacenamiento local del navegador.
          localStorage.setItem('credentials',values);
        }}
      >
  
      {/* Props de Formik */}  
        {({           
          values, // Obtiene los valores del formulario
          touched, // Verifica si el usuario ha tocado alguno de los campos
          errors, // Obtiene errores en los campos, de haberlos.
          isSubmitting, // Informa si el formulario esta siendo enviado, o se ha terminado de enviar
          handleChange, // Controla cuando hay algun cambio en un campo
          handleBlur // Controla cuando hay algun cambio de foco en el formulario
         }) => (

          <Form>
            <label htmlFor='email'>Correo</label>
            <Field id='email' name='email' placeholder='jane@acme.com' type='email' />
    
            {/* Error de correo */}
            {
              errors.email && touched.email && 
              (
                <ErrorMessage name='email' component='div'/>
              )
            }

            <label htmlFor='password'>Contraseña</label>
            <Field id='password' type='password' name='password' placeholder='Contraseña' />
    
            {/* Error de password */}
            {
              errors.password && touched.password && 
              (
                <div>
                  <ErrorMessage name='password'/>
                </div>
              )
            }

            <button type='submit'>Enviar</button>

            {isSubmitting ? (<p>Ingresando tus credenciales...</p>) : null}

          </Form>
        )}

        

      </Formik>
    </div>
  );
}

export default LoginFormik;
