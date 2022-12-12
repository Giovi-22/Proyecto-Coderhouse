import React from "react";
import { useFormik } from "formik";
import { signupForm } from "../Utils/Utils";
import { Button, TextField } from "@mui/material";

const formStyle={
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignContent:"center",
    width:"300px",
    marginTop:"10px"
};

function SignUpForm({datos}){
    const validate = (values) =>{
        const errors = {};
        if(!values.firstName){

            }else if(values.firstName.length > 10){
                errors.firstName ="El nombre debe tener menos de 10 caracteres"
                }
                if (!values.lastName) {
                  } else if (values.lastName.length > 10) {
                    errors.lastName = "El apellido debe tener menos de 10 caracteres";
                  }
                
                  if (!values.email) {
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = "Email invalido";
                  }
                  if(values.confirm_email !== values.email){
                    errors.confirm_email = "Los emails no coinciden"
                  }
                  if(values.password.length < 6){
                    errors.password = "La contraseña debe contener 6 caracteres como mínimo"
                  }
                
                  return errors;
            };
    const formik = useFormik({
            initialValues:{
                email:"",
                firstName:"",
                lastName:"",
                confirm_email:"",
                password:""
            },
            validate,
            onSubmit: values=>datos(values)
            });

    return (
            <form style={formStyle} onSubmit={formik.handleSubmit} >
            {signupForm.map(input =>
            <TextField 
            color={formik.errors[input.id]  ? "error" : "info"}
            margin="normal"
            variant= "outlined"
            key={input.id} 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values[input.id]}  
            id={input.id} 
            name={input.name} 
            type={input.type}
            label={formik.errors[input.id] ? formik.errors[input.id] : input.label} 
            placeholder={input.placeHolder} 
            />
            )}
            <Button variant="contained" disabled={Object.keys(formik.errors).length === 0 ? false : true} type="submit">Registrarse</Button>
            </form>
    );

}

export default SignUpForm;