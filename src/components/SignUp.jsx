import React, { useState } from 'react'
import * as yup from 'yup'
import {Form,Formik} from 'formik'
import { CiLogin } from "react-icons/ci";
import { TextField, Button, InputAdornment, IconButton, Divider } from '@mui/material';
import {ArrowBack, Google, Visibility,VisibilityOff} from '@mui/icons-material'

import { IoPersonAddSharp } from "react-icons/io5";

function SignUp() {

     const [visible,setVisible] = useState(false)

     const  visibleHandler = () =>{
        setVisible(!visible)
     }

    const initialValues = {
        name:'',
        password:'',
        email:''
    }
    const validationschema = yup.object({
        name:yup.string().required('Name is required'),
        password:yup.string().required('Password is required'),
        email:yup.string().email('Enter vaild email').required('Enter your email')
    })
    const submitHandler = (values) => {
        console.log("Login values:", values);
       
    };

  return (
   <div className="auth_card">
    <Formik onSubmit={submitHandler} initialValues={initialValues} validationSchema={validationschema}>
        {
            ({handleChange,handleBlur,values,touched,errors})=>(
                <Form>
                  <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-12 auth_header">
                        <IoPersonAddSharp />
                        <p>register new account</p>
                        <span>sign up to continue</span>
                        </div>
                        <div className="col-12">
                            <TextField 
                            name='name'
                            type='text'
                            value={values.name}
                            fullWidth
                            size='small'
                            label='Name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                            />
                        </div>
                        <div className="col-12">
                            <TextField 
                            name='email'
                            label='email'
                            type='email'
                            size='small'
                            value={values.email}
                            fullWidth
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            />
                        </div>
                        <div className="col-12">
                            <TextField 
                            name='password'
                            label='password'
                            size='small'
                            fullWidth
                            type={visible ? 'text':'password'}
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
                        <Button type='submit' fullWidth variant='contained'>submit</Button>
                        </div>
                        <div className="col-12">
                            <Divider>OR</Divider>
                        </div>
                        <div className="col-12">
                            <Button endIcon={<Google />} fullWidth variant='outlined' >Continue with google</Button>
                        </div>
                        <div className="col-12">
                            <Button startIcon={<ArrowBack />}>go back to login</Button>
                        </div>
                    </div>
                  </div>
                  
                </Form>
            )
        }
    </Formik>
   </div>
  )
}

export default SignUp