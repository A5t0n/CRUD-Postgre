import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function TableList({handleOpen, searchTerm}) {

    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clients');
                setTableData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    },[]);

    const filterData = tableData.filter((client) => {
        return client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.job.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const clients=[
        {id:1, name: "Cy Ganderton",email:"johndoes@gmail.com" ,job: "Quality Control Specialist", rate:"100",isactive:true},
        {id:2, name: "John Doe",email:"johndoes1@gmail.com" ,job: "Developer", rate:"200",isactive:true},
        {id:3, name: "Cy Doe",email:"johndoes2@gmail.com" ,job: "Manager", rate:"300",isactive:false},
    ]
    return(
        <>
            {error && <div className="alert alert-error">{error}</div>}
            <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className="hover">

                {filterData.map((client)=>(
                    <tr key={client.id}>
                        <th>{client.id}</th>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.job}</td>
                        <td>{client.rate}</td>
                        <td> 
                            <button className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline btn-primary`}`}>
                                {client.isactive ? 'Active' : 'Inactive'}
                            </button>
                        </td>
                        <td>
                            <button onClick={()=> handleOpen('edit', client)} className="btn btn-secondary">Update</button>
                        </td>
                        <td>
                            <button className="btn btn-accent">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    );

}