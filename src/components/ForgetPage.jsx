import React from "react";
import { CiRedo } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";

import { Form, Formik } from "formik";
import * as yup from "yup";
import { AlternateEmail, ArrowBack } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

function ForgetPage() {
  const initialValues = {
    email: "",
  };
  const validationschema = yup.object({
    email: yup
      .string()
      .email("enter valid email")
      .required("email is required"),
  });

  const handlerSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div className="auth_card">
      <Formik
        initialValues={initialValues}
        validationSchema={validationschema}
        onSubmit={handlerSubmit}
      >
        {({ handleBlur, handleChange, errors, touched, values }) => (
          <Form>
            <div className="container_fluid">
              <div className="row g-3">
                <div className="col-12 auth_header">
                  <CiRedo />
                  <p>Find Your Account</p>
                  <span>Enter Your Registered Email</span>
                </div>
                <div className="col-12">
                  <TextField
                    name="email"
                    type="email"
                    label="enter your email"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmail /> {/* Directly use the icon here */}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="col-12">
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    endIcon={<IoSend />}
                  >
                    Send OTP
                  </Button>
                </div>
                <div className="col-12">
                    <Button variant="outlined" fullWidth type="submit" startIcon={<ArrowBack />} >
                     Back To Login
                    </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ForgetPage;
