import React, { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { TextField, Button, InputAdornment, IconButton, Divider } from '@mui/material';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import {ArrowBack, Google, Visibility,VisibilityOff} from '@mui/icons-material'


function LoginPage() {
   
    const [visible,setVisible] = useState(false);

    const visibleHandler = () =>{
        setVisible(()=>!visible)
    }



    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const submitHandler = (values) => {
        console.log("Login values:", values);
       
    };





    return (
        <div className='auth_card'>
             <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitHandler}
            >
                {({ handleBlur, handleChange, values, touched, errors }) => (
                    <Form>
                        <div className="container-fluid">
                            <div className="row g-3">
                                <div className="col-12 auth_header">
                                    <CiLogin />
                                    <p>Welcome back</p>
                                    <span>Login to continue</span>
                                </div>

                                <div className="col-12">
                                    <TextField
                                        label="Your Email"
                                        type="email"
                                        size='small'
                                        name='email'
                                        fullWidth
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </div>
                                <div className="col-12">
                                    <TextField   
                                    fullWidth    
                                    value={values.password}   
                                    size='small'
                                    label='password'
                                    type={visible ? 'text' : 'password'}
                                    name='password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}

                                    InputProps ={{
                                        endAdornment:(
                                            <InputAdornment position='end'>
                                                <IconButton edge='end'  onClick={visibleHandler}>
                                                {visible ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    />
                                </div>

                              

                                <div className="col-12">
                                    <Button type="submit" variant="contained" fullWidth>
                                        Login
                                    </Button>
                                </div>
                                <div className="col-12">
                                    <Divider>OR</Divider>
                                </div>
                                <div className="col-12">
                                    <Button variant='outlined' fullWidth endIcon={<Google />} > google</Button>
                                </div>
                                <div className="col-12">
                                    <Button startIcon={<ArrowBack/>} variant='outlined' fullWidth> create an account</Button>
                                </div>
                                <div className="col-12">
                                    <Button variant='text' color='error' fullWidth>forget password</Button>
                                </div>
                            </div>

                        </div>
                    </Form>
                )}
            </Formik> 

           
        </div>
    );
}

export default LoginPage;


// import React from 'react'

// function LoginPage() {
//   return (
//     <div>LoginPage</div>
//   )
// }

// export default LoginPage