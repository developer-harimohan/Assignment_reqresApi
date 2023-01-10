import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { getId } from "../redux/addIdSlice";


const Common = (props) => {
    const user = useSelector(state => state.user)

    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    const handleSelection = (e) => {
        // dispatch(addIdSlice.getId(e.value.id))
        dispatch(getId(e.value.id))
        setSelectedProduct(e.value)
        props.handlePage(true)
    }
    return (
        <div className="card">
            <h3>which user do you want to {props.title}</h3>
            <DataTable value={user.users} responsiveLayout="scroll" selectionMode="single" selection={selectedProduct} onSelectionChange={handleSelection}>
                <Column field="id" header="id"></Column>
                <Column field="first_name" header="first_name"></Column>
                <Column field="last_name" header="last_name"></Column>
                <Column field="email" header="email"></Column>
            </DataTable>
        </div>

    )
};


export default Common;
