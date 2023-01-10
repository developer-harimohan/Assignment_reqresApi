import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/authSlice";
import Button from "../components/Button";

const initialValues = {
    email: "eve.holt@reqres.in",
    password: ""
}
const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth)
    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            navigate("/")
        }
    }, [token])
    //form validation
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        // validationSchema: schema,
        onSubmit: (values, action) => {
            dispatch(register(values))
        }
    })
    return (
        <div className="main_login_container">
            <div className="login_container shadow-sm">
                <form className="p-fluid" onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor="" className="field_label loginform-label">Email</label>
                        <span className="p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <InputText placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        </span>

                    </div>
                    <br />
                    <div className="password">
                        <label htmlFor="" className="field_label loginform-label">Password</label>
                        <Password placeholder="Password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <br />
                    <div>
                        <Button title="Submit" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Login;
