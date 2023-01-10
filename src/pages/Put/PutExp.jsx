import React, { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import styled from "styled-components";
import Button from "../../components/Button";
import { useFormik } from "formik";
import schema from "./PutExpValidation";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { updateUser } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import Common from "../Common";
const initialValues = {
    name: "",
    job: ""
}
const baseUrl = "https://reqres.in/api/users"
const PutExp = () => {
    const [renderPage, setRenderPage] = useState(false)
    const { value } = useSelector(state => state.idFind)
    const [apiRes, setApiRes] = useState(false)
    //form validation
    const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values, action) => {
            const url = baseUrl + "/" + value
            updateUser(url, JSON.stringify(values)).then((res) => setApiRes(true))
        }
    })

    if (apiRes) {
        return <div className="main_login_container">
            Successful
        </div>
    }

    return (
        <>
            {
                renderPage ?
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
                    : <div>
                        <Common title="edit" handlePage={setRenderPage} />
                    </div>

            }
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

export default PutExp;
