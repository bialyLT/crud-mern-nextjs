'use client'
import { useState, useEffect } from "react"

   
export default function Page() {
    
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then(response => response.json())
            .then(users => {
                setData(users);
            })
            .catch(err => {
                console.log(err);
            })
        return () => {
            
        };
    }, [data]);
 
    return <main>{JSON.stringify(data)}</main>
  }