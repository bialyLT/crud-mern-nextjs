'use client'
import { useEffect, useState } from "react"
import axios from "axios";
import Row from "./Row";
export default function TableRows() {

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                let res = await fetch(`${process.env.NEXT_PUBLIC_URL_HOST}`);
                let users = await res.json();
                setData(users.map((u, i) => {
                    return (
                        <Row u={u} i={i} key={i} />
                    )
                }))
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        return () => {
        };
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data}
                </tbody>
            </table>
        </div>
    )
}