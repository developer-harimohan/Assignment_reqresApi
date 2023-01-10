import React, { useEffect } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";

const GetExp = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    if (user.loading) {
        return "loading"
    }
    console.log(user)
    return (
        <div className="card">
            <DataTable value={user.users} responsiveLayout="scroll">
                <Column field="id" header="id"></Column>
                <Column field="first_name" header="first_name"></Column>
                <Column field="last_name" header="last_name"></Column>
                <Column field="email" header="email"></Column>
            </DataTable>
        </div>
    )
};

export default GetExp;
