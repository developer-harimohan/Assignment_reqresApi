import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deletUser } from "../../services/user.service";
import { useSelector } from "react-redux";
import Common from "../Common";
const baseUrl = "https://reqres.in/api/users"
const DeleteExp = () => {
    const user = useSelector(state => state.user)
    const { value } = useSelector(state => state.idFind)
    const [renderPage, setRenderPage] = useState(false)
    const [res, setRes] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)


    if (isSuccess) {
        return <div className="main_login_container">
            Successful
        </div>
    }
    useEffect(() => {
        if (renderPage) {
            const url = baseUrl + "/" + value
            console.log(url)
            deletUser(url).then((res) => setRes(true))
        }
    }, [renderPage])

    if (res) {
        return <div className="main_login_container">
            Successful
        </div>
    }

    return (
        <>
            <div>
                <Common title="Delete" handlePage={setRenderPage} />
            </div>

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

export default DeleteExp;
