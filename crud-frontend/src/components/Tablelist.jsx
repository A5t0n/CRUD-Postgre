export default function Tablelist() {

    const clients=[
        {id:1, name: "Cy Ganderton",email:"johndoes@gmail.com" ,job: "Quality Control Specialist", rate:"100",isactive:true},
        {id:2, name: "John Doe",email:"johndoes1@gmail.com" ,job: "Developer", rate:"200",isactive:true},
        {id:3, name: "Cy Doe",email:"johndoes2@gmail.com" ,job: "Manager", rate:"300",isactive:false},
    ]
    return(
        <>
            <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Job</th>
                    <th>Rate</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody className="hover">

                {clients.map((client)=>(
                    <tr>
                    <th>{client.id}</th>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.job}</td>
                    <td>{client.rate}</td>
                    <td> </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </>
    );

}