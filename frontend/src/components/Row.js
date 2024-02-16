import { useState } from "react";
import axios from "axios";

const Row = ({ u, i }) => {
    const [isEditing, setIsEditing] = useState(false);
    let [username, setUsername] = useState(u.username);
    let [name, setName] = useState(u.name);
    let [lastname, setLastname] = useState(u.lastname);
    let [age, setAge] = useState(u.age);
    let rowContent;

    const handleUpdate = async () => {
        try {
            const url = `${process.env.NEXT_PUBLIC_URL_HOST}/${u._id}`;
            const updatedData = {
                ...u,
                username,
                name,
                lastname,
                age
            };

            const response = await axios.put(url, updatedData);

            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async () => {
        const url = `${process.env.NEXT_PUBLIC_URL_HOST}/${u._id}`;
        axios.delete(url)
            .then(response => {
                console.log('Resource deleted successfully:', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting resource:', error);
            });
    }

    if (isEditing) {
        rowContent = (
            <>
                <th>
                    {i + 1}
                </th>
                <td>
                    <input value={username} type="text" onChange={(e) => {
                        setUsername(username = e.target.value)
                    }} />
                </td>
                <td>
                    <input value={name} type="text" onChange={(e) => {
                        setName(name = e.target.value)
                    }} />
                </td>
                <td>
                    <input value={lastname} type="text" onChange={(e) => {
                        setLastname(lastname = e.target.value)
                    }} />
                </td>
                <td>
                    <input value={age} type="number" onChange={(e) => {
                        setAge(age = e.target.value)
                    }} />
                </td>
                <td>
                    <button className="btn btn-circle btn-outline" onClick={() => {
                        setIsEditing(false)
                        handleUpdate()
                    }} type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-check" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4" /><path d="M15 19l2 2l4 -4" /></svg>
                    </button>
                </td>
            </>
        )
    } else {
        rowContent = (
            <>
                <th>
                    {i + 1}
                </th>
                <td>{u.username}</td>
                <td>{u.name}</td>
                <td>{u.lastname}</td>
                <td>{u.age}</td>
                <td>
                    <button className="btn btn-circle btn-outline" onClick={() => {
                        setIsEditing(true);

                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z" /></svg>
                    </button>
                </td>
            </>
        )
    }



    return (
        <tr>
            {rowContent}
            <td>
                <button className="btn btn-circle btn-outline" onClick={handleDelete}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 12h6" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
                </button>
            </td>
        </tr>
    );
}

export default Row;
