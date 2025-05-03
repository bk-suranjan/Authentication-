import React from 'react'
import {Form,Formik} from 'formik'
import * as yup from 'yup'
import {TextField,Button} from '@mui/material'
import { FaCheckCircle } from "react-icons/fa";
import { ArrowBack } from '@mui/icons-material';
import Countdown from 'react-countdown';

function OTP() {
    const initialValues ={
        otp1:'',
        otp2:'',
        otp3:'',
        otp4:'',
        otp5:'',
        otp6:'',
    }
    const validationschema = yup.object({
        opt1:yup.number().required(),
        opt2:yup.number().required(),
        opt3:yup.number().required(),
        opt4:yup.number().required(),
        opt5:yup.number().required(),
        opt6:yup.number().required(),
    })
    const handleSubmit = (values) =>{
        console.log(values)
       
    }
    const otpArr = ['otp1','otp2','otp3','otp4','otp5','otp6']

    const inputChange = (value, setFieldValue, index, item) => {
        setFieldValue(item, value);
        if (value && index < 5) {
          const nextElement = document.getElementById(`otp-${index + 2}`);
          if (nextElement) {
            nextElement.focus();
          }
        }
      };
      
  return (
   <div className="auth_card">
    <Formik
    initialValues={initialValues}
    validationSchema={validationschema}
    onSubmit={handleSubmit}
    >
     {
        ({handleChange,handleBlur,values,errors,touched,setFieldValue})=>(
            <Form>
                <div className="container-fluid">
                    <div className="row g-3">
                        <div className="col-12 auth_header">
                        <FaCheckCircle />
                        <p>Verify OTP</p>
                        <span>Enter the 6-digit OTP we just send to your Registered email</span>
                        </div>
                        <div className="col-12 otp-inputs">
                            {
                                otpArr.map((item,index)=>(
                                    <TextField 
                                    key={index}
                                    id={`otp-${index + 1}`}
                                    name={item}
                                    type='text'
                                    value={values[item]}
                                    onChange={(event) => {
                                        const value = event.target.value.replace(/[^0-9]/g, ''); // Allow only numeric input
                                        inputChange(value, setFieldValue, index, item); // Pass the value directly without incrementing
                                      }}
                                    inputProps={{ maxLength: 1, pattern: '[0-9]*', inputMode: 'numeric' }} // helps on mobile
                                    onBlur={handleBlur}
                                    error={touched[item] && Boolean(errors[item])}
                                    size='small'
                                    fullWidth
                                  />
                                  
                                ))
                            }
                        </div>
                        <div className="col-12">
                            <Button disabled={Object.values(values).some((value)=>value === '')} variant='contained' fullWidth type='submit'>Verify</Button>
                        </div>
                        <div className="col-12">
                            <Button startIcon={<ArrowBack />} fullWidth variant='outlined'>
                                Back To login
                            </Button>
                        </div>
                        <div className="col-12">
                           
                        <Countdown
                        renderer={({minutes,seconds,completed})=>{
                            if(completed){
                                return <Button>resend</Button>
                            } else{
                                return <span>{minutes}:{seconds < 10 ? `0${seconds}`:seconds}</span>
                            }
                        }}
                        date={new Date().getTime() + 0.10 * 60 * 1000} />
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

export default OTP

