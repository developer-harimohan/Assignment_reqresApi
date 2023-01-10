import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import Button from "../../components/Button";
import { useFormik } from "formik";
import schema from "./PostExpValidation";
import { postProducts } from "../../services/user.service";

const initialValues = {
    name: "",
    job: ""
}
const baseUrl = "https://reqres.in/api/users"
const PostExp = () => {
    const [isSuccess, setIsSuccess] = useState(false)
    //form validation
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            postProducts(baseUrl, JSON.stringify(values)).then((res) => setIsSuccess(true))
        }
    })

    if (isSuccess) {
        return <div className="main_login_container">
            Successful
        </div>
    }

    return (
        <>
            <Wrapper>
                <div className="main_login_container">
                    <div className="login_container shadow-sm">
                        <form action="" onSubmit={handleSubmit}>
                            <h3 className="text-center head">Add Data</h3>
                            <div className="name field">
                                <label htmlFor="">Name</label>
                                <InputText placeholder="Enter Your Name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                {errors.name && touched.name ? <p className='warning-errors'>{errors.name}</p> : null}
                            </div>
                            <div className="jobs field">
                                <label htmlFor="">Job</label>
                                <InputText placeholder="Enter Your Job" name="job" value={values.job} onChange={handleChange} onBlur={handleBlur} />
                                {errors.job && touched.job ? <p className='warning-errors'>{errors.job}</p> : null}
                            </div>
                            <div className="btn text-center">
                                <Button title={"Add Data"} type={"submit"} />
                            </div>
                        </form>
                    </div>
                </div>
            </Wrapper>

        </>
    )
};
//styled components
const Wrapper = styled.div`
  .field{
    margin: 1rem 0;
  }
   label{
    display: block;
    margin-bottom: 4px;
   } 
`

export default PostExp;
