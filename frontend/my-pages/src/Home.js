import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



function Home() {

    const [data, setData] = useState([]);

    const Showdata = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.log("data fetching error");
        }
    };

    useEffect(() => {
        Showdata();
    }, []);

    return (
        <div className="container">
            <Table >
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataval, index) => {
                        return (
                            <tr key={index}>
                                <td>{dataval.id}</td>
                                <td>{dataval.name}</td>
                                <td>{dataval.email}</td>
                                <td>{dataval.phone}</td>
                                <td>{dataval.address.city}</td>
                                <td>{dataval.website}</td>
                                <td>{dataval.company.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;
