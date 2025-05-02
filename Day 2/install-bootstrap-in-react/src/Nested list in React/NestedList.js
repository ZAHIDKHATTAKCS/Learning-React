import React from 'react'
import { Table } from 'react-bootstrap'
const NestedList = () => {
    const Users = [
        {
            name: 'Zahidkhattak',
            phone: 3348854074,
            address: [
                {
                    home: 'Shamsabad',
                    city: "Rawalpindi",
                    country: 'Pakistan'
                },
                {
                    home: 'Qadri Banda',
                    city: 'Thall',
                    country: 'Pakistan'
                }
            ],
        },
        {

            name: 'Ahmad',
            phone: 3456497998,
            address: [
                {
                    home: 'Shamsabad',
                    city: "Rawalpindi",
                    country: 'Pakistan'
                },
                {
                    home: 'Qadri Banda',
                    city: 'Thall',
                    country: 'Pakistan'
                }
            ]
        }
    ]
    return (
        <>
            <Table hover striped variant='dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((user) =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Table hover striped variant='dark'>
                                        <tbody>
                                                {user.address.map((a) =>
                                                    <tr>
                                                        <td>{a.home}</td>
                                                        <td>{a.country}</td>
                                                        <td>{a.city}</td>
                                                    </tr>
                                                )}

                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table >
        </>
    )
}

export default NestedList