import TableRows from "../components/TableRows"
import FormUser from "../components/formAddUser/FormUser"

export default function Page() {

  return (
    <>
      <div className="m-5">
        <h1 className="text-xl text-center">Crud in React, Next js, Node js, MongoDB, Mongoose, Express js</h1>
      </div>
      <FormUser />
      <TableRows />
    </>
  )
}