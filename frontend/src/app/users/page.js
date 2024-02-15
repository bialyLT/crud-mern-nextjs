
// async function getData() {
//     const users = await fetch(process.env.REACT_APP_SERVER_URL);
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!users.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data');
//     }
   
//     return users.json();
//   }

const Page = async () => {
    const res = await fetch(process.env.REACT_APP_SERVER_URL);
    const data = await res.json();
    // const data = await getData();
     
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
          <tbody>{data}</tbody>
        </table>
      </div>
    );
}

export default Page;
