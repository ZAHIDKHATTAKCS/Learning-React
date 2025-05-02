import React from "react";
import { Table } from "react-bootstrap";

const ArrayMap = () => {
    // const Employees= ['Albash','Zahid','Khattak']; simple array
    // Employees.map((list)=>{
    //     console.log(list)
    // })
    const Students = [
        {
            name: "Zahid",
            email: "zahidkhattakcs@gmail.com",
            phone: 3348854074,
        },
        {
            name: "albash",
            email: "albash@test.com",
            phone: 23232,
        },
        {
            name: "ahmad",
            email: "ahmad@gmail.com",
            phone: 23232,
        },
    ];

    return (
        <div>
            <h4>Map function using in Array !</h4>
            <h4> List With Bootstrap Table </h4>
            <Table striped bordered hover variant="warning">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((list, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.phone}</td>
                        </tr>

                        // here i applied a condition
                        // list.phone === 23232 ? (
                        //     <tr key={i}>
                        //         <td>Name is : {list.name}</td>
                        //         <td>Email is : {list.email}</td>
                        //         <td>Phone is : {list.phone}</td>
                        //     </tr>
                        // ) : null
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ArrayMap;
